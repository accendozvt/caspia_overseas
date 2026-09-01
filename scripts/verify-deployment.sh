#!/usr/bin/env bash
# Verifies the Apache rules in public/.htaccess actually took effect on the live site.
#
# The .htaccess cannot be executed locally (there is no Apache in the dev environment),
# so these checks are the real proof that redirects, error codes, headers, compression
# and caching are working. Run it once after uploading out/ to public_html.
#
#   bash scripts/verify-deployment.sh                     # checks https://caspiaedu.com
#   bash scripts/verify-deployment.sh example.com         # another host
#   bash scripts/verify-deployment.sh localhost:4173 http # smoke-test the script itself
#
# The second argument only exists so the non-redirect checks (status codes, headers,
# compression, caching, SEO endpoints) can be exercised against a local static server.
# The canonical-origin checks always target the real https apex and will fail locally,
# which is expected - only Apache can satisfy them.
#
# Requires curl. Exits non-zero if any check fails.

set -u
HOST="${1:-caspiaedu.com}"
SCHEME="${2:-https}"
BASE="$SCHEME://$HOST"
PASS=0
FAIL=0

ok()   { printf '  \033[32mPASS\033[0m  %s\n' "$1"; PASS=$((PASS+1)); }
bad()  { printf '  \033[31mFAIL\033[0m  %s\n' "$1"; FAIL=$((FAIL+1)); }
head_of() { curl -sSI --max-time 20 "$1" 2>/dev/null; }

status_of()   { curl -sS -o /dev/null -w '%{http_code}' --max-time 20 "$1"; }
location_of() { curl -sSI --max-time 20 "$1" | tr -d '\r' | awk 'tolower($1)=="location:"{print $2}'; }
hops_of()     { curl -sS -o /dev/null -w '%{num_redirects}' -L --max-time 30 "$1"; }

echo "Verifying $BASE"
echo
echo "Canonical origin"

code=$(status_of "http://$HOST/")
loc=$(location_of "http://$HOST/")
[ "$code" = "301" ] && ok "http -> 301 (got $code)" || bad "http should 301, got $code"
case "$loc" in https://$HOST/*|https://$HOST) ok "http redirects to https://$HOST" ;; *) bad "http redirects to '$loc', expected https://$HOST/" ;; esac

code=$(status_of "http://www.$HOST/")
loc=$(location_of "http://www.$HOST/")
case "$loc" in https://$HOST/*|https://$HOST) ok "http://www lands on apex https in one hop" ;; *) bad "http://www redirects to '$loc', expected https://$HOST/" ;; esac

hops=$(hops_of "http://www.$HOST/")
[ "${hops:-9}" -le 1 ] && ok "http://www -> final URL in $hops redirect(s)" || bad "redirect chain too long: $hops hops"

loc=$(location_of "https://www.$HOST/")
case "$loc" in https://$HOST/*|https://$HOST) ok "https://www -> apex" ;; *) bad "https://www redirects to '$loc'" ;; esac

echo
echo "Trailing slash and duplicates"
loc=$(location_of "$BASE/study-in-germany")
case "$loc" in */study-in-germany/) ok "/study-in-germany -> /study-in-germany/" ;; *) bad "no trailing-slash redirect, got '$loc'" ;; esac

loc=$(location_of "$BASE/index.html")
case "$loc" in "$BASE/"|/) ok "/index.html -> /" ;; *) bad "/index.html redirects to '$loc'" ;; esac

echo
echo "Status codes"
code=$(status_of "$BASE/this-page-does-not-exist-$$/")
[ "$code" = "404" ] && ok "missing page returns a real 404" || bad "missing page returned $code, expected 404 (soft 404s are not indexable)"

code=$(status_of "$BASE/500.html")
[ "$code" = "200" ] && ok "/500.html is present for ErrorDocument" || bad "/500.html returned $code"

echo
echo "Security headers"
H=$(head_of "$BASE/" | tr -d '\r' | tr 'A-Z' 'a-z')
for h in strict-transport-security x-content-type-options referrer-policy x-frame-options content-security-policy permissions-policy; do
  echo "$H" | grep -q "^$h:" && ok "$h present" || bad "$h missing"
done

echo
echo "Compression and caching"
enc=$(curl -sSI --max-time 20 -H 'Accept-Encoding: gzip, br' "$BASE/" | tr -d '\r' | awk 'tolower($1)=="content-encoding:"{print $2}')
[ -n "${enc:-}" ] && ok "HTML compressed ($enc)" || bad "HTML not compressed - enable mod_deflate/mod_brotli"

asset=$(curl -sS --max-time 20 "$BASE/" | grep -o '/_next/static/[^"]*\.js' | head -1)
if [ -n "$asset" ]; then
  cc=$(head_of "$BASE$asset" | tr -d '\r' | awk 'tolower($1)=="cache-control:"{ $1=""; print }' | sed 's/^ //')
  case "$cc" in *immutable*) ok "hashed asset cached immutably ($cc)" ;; *) bad "hashed asset Cache-Control is '$cc', expected immutable" ;; esac
else
  bad "could not find a /_next/static asset to test caching"
fi

cc=$(head_of "$BASE/" | tr -d '\r' | awk 'tolower($1)=="cache-control:"{ $1=""; print }' | sed 's/^ //')
case "$cc" in *must-revalidate*|*no-cache*|*max-age=0*) ok "HTML revalidates ($cc)" ;; *) bad "HTML Cache-Control is '$cc'; long-lived HTML leaves visitors on stale pages" ;; esac

echo
echo "SEO endpoints"
for p in /robots.txt /sitemap.xml /llms.txt /llms-full.txt /manifest.webmanifest; do
  code=$(status_of "$BASE$p")
  [ "$code" = "200" ] && ok "$p 200" || bad "$p returned $code"
done

echo
echo "-----------------------------------------"
echo "  passed: $PASS   failed: $FAIL"
[ "$FAIL" -eq 0 ] || exit 1

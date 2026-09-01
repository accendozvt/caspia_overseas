/**
 * Renders one JSON-LD `<script>` block. Pair with the builders in lib/jsonld.ts:
 *
 *   <JsonLd data={pageGraph({ title, description, path, breadcrumbs })} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

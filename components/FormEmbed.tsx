"use client";

import { useEffect } from "react";

const SCRIPT_SRC =
  "https://formfacade.com/include/103715263079359746673/form/1FAIpQLScg1LpltdJVcPqNEzRJywzMNShw9-ueOR4M1h00Scju_mxOLA/wordpress.js?div=ff-compose";

/**
 * FormFacade admission/registration form embed.
 * Renders the #ff-compose target div and injects the FormFacade
 * loader script on mount (removed again on unmount).
 */
export default function FormEmbed() {
  useEffect(() => {
    const container = document.getElementById("ff-compose");

    /**
     * FormFacade renders its form straight into our page (not an iframe), and two
     * things it emits fail accessibility audits. We can't edit their markup, so we
     * correct it after each render:
     *
     *  - the 1600x400 header banner ships with no `alt` at all. It is decorative
     *    chrome above the form, so it gets an empty alt rather than invented text.
     *  - the form's own title renders as <h3>, and our page heading above it is the
     *    <h1>, so the document skipped straight from level 1 to level 3. Promoting
     *    just that one heading to level 2 restores the sequence; the section titles
     *    below it stay at 3, which is then correct.
     */
    const patchAccessibility = () => {
      if (!container) return;
      container
        .querySelectorAll("img:not([alt])")
        .forEach((img) => img.setAttribute("alt", ""));
      const formTitle = container.querySelector("#ff-title-root");
      if (formTitle && !formTitle.getAttribute("aria-level")) {
        formTitle.setAttribute("aria-level", "2");
      }
    };

    const observer = new MutationObserver(patchAccessibility);
    if (container) observer.observe(container, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      script.remove();
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <>
      {/*
        The form's script, stylesheet and images all come from formfacade.com, and the
        connection is only opened once React has mounted and injected the script tag.
        Opening it during HTML parse saves ~180ms on the critical path. Only rendered
        on pages that actually embed the form, so other pages don't pay for it.
      */}
      <link rel="preconnect" href="https://formfacade.com" crossOrigin="" />
      <div id="ff-compose" className="min-h-[480px]" />
    </>
  );
}

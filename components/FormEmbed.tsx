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
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      const container = document.getElementById("ff-compose");
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="ff-compose" className="min-h-[480px]" />;
}

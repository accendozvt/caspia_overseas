"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Hero portrait carousel. Images are person cut-outs that sit flush against the
 * bottom of the hero. Crossfades automatically; no overlapping dots.
 */
export default function BannerCarousel({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-end h-full">
      {/* soft glow behind the subject */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70%] w-[85%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(139,124,205,0.55) 0%, rgba(250,136,53,0.18) 45%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative w-full max-w-[26rem] aspect-[768/1128]">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt="Caspia Overseas Studies — career programs"
            fill
            priority={idx === 0}
            sizes="(max-width: 1024px) 60vw, 420px"
            className={`object-contain object-bottom transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

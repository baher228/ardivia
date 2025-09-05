"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  // Optional action: if you later add routing, you can pass an onClick handler.
  onAction?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  onAction,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <article
      className={[
        "group relative isolate overflow-hidden rounded-2xl",
        "bg-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "ring-1 ring-black/5",
        "transition-transform duration-500 will-change-transform",
        "hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]",
        isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-4",
      ].join(" ")}
    >
      {/* Image layer */}
      <div className="relative h-[320px] md:h-[360px] lg:h-[420px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={false}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={[
            "object-cover",
            "transition-transform duration-[900ms]",
            prefersReduced ? "" : "group-hover:scale-105",
          ].join(" ")}
        />
        {/* Soft vignette + bottom gradient for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      </div>

      {/* Top-right round action (appears on hover/focus) */}
      <div className="pointer-events-none absolute right-4 top-4 z-10">
        <button
          type="button"
          onClick={onAction}
          aria-label={`Open ${title}`}
          className={[
            "pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full",
            "bg-white/90 backdrop-blur ring-1 ring-black/10",
            "opacity-0 translate-y-[-4px]",
            "transition-all duration-300",
            "group-hover:opacity-100 group-hover:translate-y-0",
            "focus:opacity-100 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5F34] focus:ring-offset-white",
          ].join(" ")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1f2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </button>
      </div>

      {/* Bottom-left copy overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">
        <h3 className="text-white text-2xl md:text-[28px] font-semibold tracking-tight drop-shadow">
          {title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm md:text-base text-white/90 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative subtle inner border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

      {/* Inline keyframe for first-paint entrance */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 700ms ease-out forwards;
        }
      `}</style>
    </article>
  );
};

export default ServiceCard;

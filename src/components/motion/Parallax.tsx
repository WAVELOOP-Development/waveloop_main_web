"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function Parallax({
  children,
  distance = 70,
  className,
}: {
  children: ReactNode;
  distance?: number | undefined;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduced ? 0 : y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/** Image that scales down into place as it enters the viewport. */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string | undefined;
  imgClassName?: string | undefined;
  width: number;
  height: number;
  priority?: boolean | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.04, 1.14]);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className ?? ""}`}
      initial={
        reduced ? { opacity: 0 } : { opacity: 0, clipPath: "inset(14% 8% 14% 8% round 24px)" }
      }
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ scale: reduced ? 1 : scale }}
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
      />
    </motion.div>
  );
}

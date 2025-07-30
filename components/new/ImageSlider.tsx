"use client";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ images }: { readonly images: readonly string[] }) {
  const duplicatedImages = [...images, ...images]; // ✅ duplicate only once
  const [hovered, setHovered] = useState(false);

  // ✅ Motion value for X position
  const x = useMotionValue(0);

  const speed = 2; // ✅ control scroll speed (px per frame)
  const totalWidth = images.length * 300; // ✅ width of one full set (px)

  // ✅ Transform X to a modulo value to avoid gaps
  const translateX = useTransform(x, (v) => `${-((v % totalWidth))}px`);

  // ✅ Animate manually using useAnimationFrame
  useAnimationFrame((_, delta) => {
    if (!hovered) {
      // move based on delta time
      x.set(x.get() + (speed * delta) / 16.67); // 60fps normalized
    }
  });

  return (
    <button
      type="button"
      aria-label="Image slider"
      style={{
        width: "100%",
        height: "300px",
        overflow: "hidden",
        position: "relative",
        border: "none",
        padding: 0,
        background: "none",
        cursor: "pointer"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        style={{
          display: "flex",
          height: "100%",
          x: translateX // ✅ apply seamless looping transform
        }}
      >
        {duplicatedImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              flexShrink: 0,
              filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
              transition: "filter 0.4s ease-in-out"
            }}
          />
        ))}
      </motion.div>
    </button>
  );
}

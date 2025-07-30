"use client";
import { motion } from "framer-motion";

interface LyricsEffectProps {
  lines: string[];
  uppercase?: boolean;
  letterDelay?: number;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
}

export default function LyricsEffect({
  lines,
  uppercase = false,
  letterDelay = 0.05,
  fontFamily = "sans-serif",
  fontSize = "48px",
  color = "#fff",
  backgroundColor = "rgba(255,255,255,0.2)"
}: Readonly<LyricsEffectProps>) {
  const processed = uppercase ? lines.map((l) => l.toUpperCase()) : lines;
  let totalDelay = 0;

  return (
    <motion.div
      style={{
        fontSize,
        fontWeight: "900",
        fontFamily,
        lineHeight: "1.3",
        color,
        position: "relative"
      }}
      initial={{ opacity: 1 }} // keep visible ghost text
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // ✅ triggers when 20% visible
    >
      {processed.map((line, li) => {
        const startDelay = totalDelay;
        totalDelay += line.length * letterDelay;

        return (
          <div
            key={li}
            style={{ position: "relative", display: "block", whiteSpace: "pre" }}
          >
            {/* 🔹 Ghost background */}
            <span
              style={{
                opacity: 0.3,
                position: "absolute",
                top: 0,
                left: 0,
                color: backgroundColor
              }}
            >
              {line}
            </span>

            {/* 🔹 Animated letters */}
            <span style={{ position: "relative" }}>
              {line.split("").map((letter, i) => (
                <motion.span
                  key={`${li}-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: startDelay + i * letterDelay,
                    duration: 0.3
                  }}
                  viewport={{ once: true, amount: 0.2 }} // ✅ triggers per letter only when visible
                  style={{ display: "inline", color }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

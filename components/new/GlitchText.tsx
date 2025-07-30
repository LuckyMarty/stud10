"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
    text: string;
    glitchInterval?: number; // time between glitches (ms)
    glitchDuration?: number; // how long the glitch lasts (ms)
    intensity?: number;      // how many letters glitch at once
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    fontWeight?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?";
// const CHARS = "*$%01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";


export default function GlitchText({
    text,
    glitchInterval = 3000,
    glitchDuration = 2000,
    intensity = 3,
    fontSize = "40px",
    color = "#fff",
    fontFamily = "N27",
    fontWeight = "900"
}: Readonly<GlitchTextProps>) {
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        const glitch = () => {
            const letters = text.split("");
            const indices = new Set<number>();
            while (indices.size < intensity) {
                indices.add(Math.floor(Math.random() * text.length));
            }
            // temporarily replace random letters
            indices.forEach((i) => {
                letters[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
            });
            setDisplay(letters.join(""));

            // revert back after glitchDuration
            setTimeout(() => setDisplay(text), glitchDuration);
        };

        const interval = setInterval(glitch, glitchInterval);
        return () => clearInterval(interval);
    }, [text, glitchInterval, glitchDuration, intensity]);

    return (
        <motion.div
            style={{
                fontFamily,
                fontWeight,
                fontSize,
                color,
                letterSpacing: "2px",
                whiteSpace: "pre"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {display}
        </motion.div>
    );
}

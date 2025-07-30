"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrambleTextProps {
    text: string;
    duration?: number; // total time to finish
    speed?: number;    // speed of scrambling
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    fontWeight?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?";

export default function ScrambleText({
    text,
    duration = 1.5,
    speed = 30,
    fontSize = "40px",
    color = "#fff",
    fontFamily = "N27",
    fontWeight = "900"
}: Readonly<ScrambleTextProps>) {
    const [display, setDisplay] = useState(text.split("").map(() => ""));

    useEffect(() => {
        let frame = 0;
        const totalFrames = Math.floor(duration * speed);
        const interval = setInterval(() => {
            frame++;
            setDisplay((prev) =>
                prev.map((char, i) => {
                    if (frame / speed > i * 0.05) {
                        if (frame > totalFrames - i * 2) return text[i];
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    }
                    return char;
                })
            );
            if (frame > totalFrames + text.length) clearInterval(interval);
        }, 1000 / speed);

        return () => clearInterval(interval);
    }, [text, duration, speed]);

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
            {display.join("")}
        </motion.div>
    );
}

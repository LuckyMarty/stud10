"use client";

import "./globals.css";
import { ReactNode, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // triggers earlier/later

  return (
    <html lang="fr">
      <body>
        <NavBar />
        <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            key={pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            // style={{ maxWidth: "1400px", margin: "0 auto" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      document.body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      html.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div>
      {/* ✅ Hamburger Button */}
      <button
        onClick={toggleMenu}
        style={{
          width: "40px",
          height: "40px",
          position: "relative",
          zIndex: 20,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Menu"
      >
        {/* ✅ Hamburger Lines */}
        <motion.span
          animate={
            open
              ? { rotate: 45, y: 0, background: "#fff" }
              : { rotate: 0, y: 0, background: "#000" }
          }
          style={lineStyle}
        />
        <motion.span
          animate={
            open
              ? { opacity: 0, y: 10, background: "#fff" }
              : { rotate: 0, y: 10, opacity: 1, background: "#000" }
          }
          style={lineStyle}
        />
        <motion.span
          animate={
            open
              ? { rotate: -45, y: 20, background: "#fff" }
              : { rotate: 0, y: 20, background: "#000" }
          }
          style={lineStyle}
        />
      </button>

      {/* ✅ Fullscreen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundColor: "rgba(0,0,0,1)", // ✅ Dark opaque overlay
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 19, // ✅ ensure it's on top
            }}
          >
            {/* ✅ Menu Links (Black text on white background) */}
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  margin: "15px 0",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ✅ Shared line style
const lineStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "4px",
  borderRadius: "2px",
  top: "10px",
  left: 0,
};

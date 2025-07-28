"use client";

import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: FC<FadeInSectionProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
    style={{ padding: "40px 0" }}
  >
    {children}
  </motion.div>
);

export default FadeInSection;

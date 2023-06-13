"use client";
import { motion } from "framer-motion";

export const Iteem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex items-center justify-center mt-36  lg:max-w-4xl mx-auto flex-col"
    >
      {children}
    </motion.section>
  );
};

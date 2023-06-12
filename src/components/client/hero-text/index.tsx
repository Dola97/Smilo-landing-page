"use client";
import { motion } from "framer-motion";

export const HeroText = () => {
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
      className="flex items-center justify-center mt-36 max-w-4xl mx-auto flex-col"
    >
      <p className="  font-med text-center text-blue text-xl sm:text-3xl md:text-4xl">
        Dentalist is re-imagining what the dental experience can be and proudly
        setting a new standard for patient care.
      </p>
      <hr className=" w-32 h-1 mx-auto my-7 bg-indigo border-0 rounded-sm " />
    </motion.section>
  );
};

'use client';
import { motion } from "framer-motion";
import { Card } from "./card";

interface PhotoCardProps {
  src: string;
  alt?: string;
}

export function PhotoCard({ src, alt }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.04,
        y: -6,
        rotateY: 2,
      }}
      className="h-full"
    >
      <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border-slate-700/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl group">
        {/* Subtle glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(147,51,234,0.12), transparent 70%)",
          }}
        />

        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <motion.img
            src={src}
            alt={alt || "Community image"}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </Card>
    </motion.div>
  );
}

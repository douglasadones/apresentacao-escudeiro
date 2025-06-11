"use client"
import { motion } from "framer-motion"

export default function ParticleSystem() {
  const particles = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 10,
          }}
          animate={{
            y: -10,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            boxShadow: "0 0 6px rgba(245, 158, 11, 0.8)",
          }}
        />
      ))}
    </div>
  )
}

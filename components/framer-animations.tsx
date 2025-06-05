"use client"

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  duration?: number
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40, x: 0 }
      case "down":
        return { y: -40, x: 0 }
      case "left":
        return { y: 0, x: 40 }
      case "right":
        return { y: 0, x: -40 }
      case "none":
        return { y: 0, x: 0 }
      default:
        return { y: 40, x: 0 }
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  delay = 0.1,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

export function ParallaxScroll({
  children,
  className = "",
  speed = 0.5,
}: {
  children: ReactNode
  className?: string
  speed?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

export function ScaleOnHover({
  children,
  className = "",
  scale = 1.05,
}: {
  children: ReactNode
  className?: string
  scale?: number
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedCounter({
  value,
  className = "",
}: {
  value: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className={className}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

export function AnimatedGradientText({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-primary-700 via-secondary to-accent bg-clip-text text-transparent animate-gradient-x ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {children}
    </motion.span>
  )
}

export function FloatingElement({
  children,
  className = "",
  yOffset = 10,
  duration = 3,
}: {
  children: ReactNode
  className?: string
  yOffset?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export function RotateOnScroll({
  children,
  className = "",
  maxRotate = 10,
}: {
  children: ReactNode
  className?: string
  maxRotate?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-maxRotate, 0, maxRotate])

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  )
}

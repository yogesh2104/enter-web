import { cn } from "@/lib/utils"
import {  motion } from "framer-motion"
import type React from "react"

export interface HeroHighlightProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  enableMouseTracking?: boolean
}

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: HeroHighlightProps) => {

  return (
    <motion.div
      className={cn(
        "group relative flex w-full items-center justify-center",
        containerClassName,
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </motion.div>
  )
}

export type HighlightVariant = "gradient" | "underline" | "box" | "marker" | "neon" | "typewriter"

export interface HighlightProps {
  children: React.ReactNode
  className?: string
  variant?: HighlightVariant
  color?: "blue" | "purple" | "green" | "yellow" | "pink" | "orange"
  delay?: number
  duration?: number
}

export const Highlight = ({
  children,
  className,
  variant = "gradient",
  color = "blue",
  delay = 0.5,
  duration = 2,
}: HighlightProps) => {
  const colorClasses = {
    blue: {
      gradient: "from-blue-300 to-cyan-300 dark:from-blue-500 dark:to-cyan-500",
      underline: "bg-blue-400 dark:bg-blue-500",
      box: "bg-blue-100 border-blue-300 dark:bg-blue-900/30 dark:border-blue-500",
      marker: "bg-blue-200 dark:bg-blue-800/50",
      neon: "text-blue-400 shadow-blue-400/50",
    },
    purple: {
      gradient: "from-purple-300 to-pink-300 dark:from-purple-500 dark:to-pink-500",
      underline: "bg-purple-400 dark:bg-purple-500",
      box: "bg-purple-100 border-purple-300 dark:bg-purple-900/30 dark:border-purple-500",
      marker: "bg-purple-200 dark:bg-purple-800/50",
      neon: "text-purple-400 shadow-purple-400/50",
    },
    green: {
      gradient: "from-green-300 to-emerald-300 dark:from-green-500 dark:to-emerald-500",
      underline: "bg-green-400 dark:bg-green-500",
      box: "bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-500",
      marker: "bg-green-200 dark:bg-green-800/50",
      neon: "text-green-400 shadow-green-400/50",
    },
    yellow: {
      gradient: "from-yellow-300 to-orange-300 dark:from-yellow-500 dark:to-orange-500",
      underline: "bg-yellow-400 dark:bg-yellow-500",
      box: "bg-yellow-100 border-yellow-300 dark:bg-yellow-900/30 dark:border-yellow-500",
      marker: "bg-yellow-200 dark:bg-yellow-800/50",
      neon: "text-yellow-400 shadow-yellow-400/50",
    },
    pink: {
      gradient: "from-pink-300 to-rose-300 dark:from-pink-500 dark:to-rose-500",
      underline: "bg-pink-400 dark:bg-pink-500",
      box: "bg-pink-100 border-pink-300 dark:bg-pink-900/30 dark:border-pink-500",
      marker: "bg-pink-200 dark:bg-pink-800/50",
      neon: "text-pink-400 shadow-pink-400/50",
    },
    orange: {
      gradient: "from-orange-300 to-red-300 dark:from-orange-500 dark:to-red-500",
      underline: "bg-orange-400 dark:bg-orange-500",
      box: "bg-orange-100 border-orange-300 dark:bg-orange-900/30 dark:border-orange-500",
      marker: "bg-orange-200 dark:bg-orange-800/50",
      neon: "text-orange-400 shadow-orange-400/50",
    },
  }

  const renderVariant = () => {
    switch (variant) {
      case "gradient":
        return (
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration, ease: "easeInOut", delay }}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              display: "inline",
            }}
            className={cn(
              `relative inline-block rounded-lg bg-gradient-to-r px-1 pb-1`,
              colorClasses[color].gradient,
              className,
            )}
          >
            {children}
          </motion.span>
        )

      case "underline":
        return (
          <motion.span
            className={cn("relative inline-block", className)}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
          >
            {children}
            <motion.span
              className={cn("absolute bottom-0 left-0 h-0.5 rounded-full", colorClasses[color].underline)}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration, ease: "easeInOut", delay }}
            />
          </motion.span>
        )

      case "box":
        return (
          <motion.span
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: duration / 2, ease: "easeOut", delay }}
            className={cn("relative inline-block rounded-md border px-2 py-1", colorClasses[color].box, className)}
          >
            {children}
          </motion.span>
        )

      case "marker":
        return (
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration, ease: "easeInOut", delay }}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
            }}
            className={cn("relative inline-block px-1 py-0.5", colorClasses[color].marker, className)}
          >
            {children}
          </motion.span>
        )

      case "neon":
        return (
          <motion.span
            initial={{ textShadow: "0 0 0px currentColor" }}
            animate={{
              textShadow: [
                "0 0 0px currentColor",
                "0 0 10px currentColor",
                "0 0 20px currentColor",
                "0 0 10px currentColor",
              ],
            }}
            transition={{
              duration: duration * 2,
              ease: "easeInOut",
              delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className={cn("relative inline-block font-bold", colorClasses[color].neon, className)}
          >
            {children}
          </motion.span>
        )

      case "typewriter":
        return (
          <motion.span
            className={cn("relative inline-block", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration, ease: "easeInOut", delay }}
              className="absolute inset-0 overflow-hidden whitespace-nowrap bg-gradient-to-r from-transparent via-white to-transparent dark:via-black"
              style={{
                maskImage: "linear-gradient(90deg, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage: "linear-gradient(90deg, transparent, black 20%, black 80%, transparent)",
              }}
            >
              {children}
            </motion.span>
            <span className="invisible">{children}</span>
          </motion.span>
        )

      default:
        return <span className={className}>{children}</span>
    }
  }

  return renderVariant()
}


// useges
{/* <HeroHighlight >
  <Highlight variant="gradient" color="blue">Gradient Style</Highlight>
</HeroHighlight> */}
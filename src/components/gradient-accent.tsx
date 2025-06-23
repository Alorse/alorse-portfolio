"use client"

interface GradientAccentProps {
  className?: string
}

export function GradientAccent({ className = "" }: GradientAccentProps) {
  return (
    <div className={`h-1 w-full bg-[linear-gradient(90deg,#0091FF_0%,#D600FF_100%)] rounded-full ${className}`} />
  )
}
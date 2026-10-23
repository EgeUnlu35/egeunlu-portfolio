"use client"

import { Eye } from "lucide-react"
import { useEffect, useState } from "react"

export function ViewCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null))
  }, [])

  // Count up from 0 to the real number
  useEffect(() => {
    if (count === null) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(count)
      return
    }

    const duration = 1200
    const start = performance.now()
    let frame: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setShown(Math.round(count * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [count])

  if (count === null) return null

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-up">
      <Eye className="w-4 h-4" />
      <span className="tabular-nums">
        {shown.toLocaleString()} {count === 1 ? "view" : "views"}
      </span>
    </div>
  )
}

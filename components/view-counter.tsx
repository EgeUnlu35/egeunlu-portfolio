"use client"

import { Eye } from "lucide-react"
import { useEffect, useState } from "react"

export function ViewCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null))
  }, [])

  if (count === null) return null

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="w-4 h-4" />
      <span>
        {count.toLocaleString()} {count === 1 ? "view" : "views"}
      </span>
    </div>
  )
}

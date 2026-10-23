"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useRef, type CSSProperties, type PointerEvent } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href: string
  style?: CSSProperties
}

const MAX_TILT = 6 // degrees

export function ProjectCard({ title, description, tags, href, style }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(href)}&screenshot=true&meta=false&embed=screenshot.url`

  // Write straight to the element's styles so moving the mouse doesn't re-render
  const handleMove = (e: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty("--spot-x", `${x * 100}%`)
    el.style.setProperty("--spot-y", `${y * 100}%`)
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * MAX_TILT}deg) rotateY(${(x - 0.5) * MAX_TILT}deg) translateY(-4px)`
    }
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = ""
  }

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={style}
      className="group relative block rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-[transform,border-color,box-shadow] duration-200 ease-out overflow-hidden will-change-transform animate-fade-up"
    >
      {/* Spotlight that follows the cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), hsl(var(--primary) / 0.12), transparent 70%)",
        }}
      />
      <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
        <Image
          src={screenshotUrl}
          alt={`Preview of ${title}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
        </div>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

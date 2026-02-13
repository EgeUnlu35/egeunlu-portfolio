import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href: string
}

export function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(href)}&screenshot=true&meta=false&embed=screenshot.url`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl bg-secondary/50 border border-border hover:border-primary/40 transition-all overflow-hidden"
    >
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
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
        </div>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

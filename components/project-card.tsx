import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href: string
}

export function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/40 transition-all"
    >
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
    </a>
  )
}

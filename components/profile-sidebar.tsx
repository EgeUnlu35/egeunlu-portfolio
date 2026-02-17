import Image from "next/image"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <div className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-2 border-border">
        <Image
          src="https://avatars.githubusercontent.com/u/123566485?v=4"
          alt="Ege Ünlü"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">{"Ege Ünlü"}</h1>
        <p className="text-base text-muted-foreground mt-2">Senior CENG Student at IZTECH</p>
        <p className="text-base text-muted-foreground">
          Frontend Dev @FuEnergy
        </p>
      </div>

      <p className="text-base text-secondary-foreground leading-relaxed text-center lg:text-left">
        I'm building products on the web
      </p>

      <div className="flex gap-3">
        <a
          href="https://github.com/EgeUnlu35"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/ege-ünlü-255894263/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/egeunluu"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="mailto:ege.ezgi.unlular@gmail.com"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "React", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
            { name: "Next.js", color: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
            { name: "React Native", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
            { name: "TypeScript", color: "bg-blue-600/10 text-blue-600 border-blue-600/20" },
            { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
            { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
            { name: "Figma", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
          ].map((tech) => (
            <span
              key={tech.name}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

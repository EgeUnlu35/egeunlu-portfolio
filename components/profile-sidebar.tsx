import Image from "next/image"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { ViewCounter } from "@/components/view-counter"
import { TypingText } from "@/components/typing-text"

const socials = [
  { href: "https://github.com/EgeUnlu35", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/ege-ünlü-255894263/", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/egeunluu", label: "Twitter", icon: Twitter },
  { href: "mailto:ege.ezgi.unlular@gmail.com", label: "Email", icon: Mail },
]

const techStack = [
  { name: "React", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "Next.js", color: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
  { name: "React Native", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "TypeScript", color: "bg-blue-600/10 text-blue-600 border-blue-600/20" },
  { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
  { name: "Figma", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
]

const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <div className="group relative w-52 h-52 lg:w-60 lg:h-60 animate-fade-up">
        {/* Rotating gradient glow behind the avatar */}
        <div
          aria-hidden="true"
          className="absolute -inset-1.5 rounded-full opacity-60 blur-md animate-spin-slow group-hover:opacity-90 transition-opacity duration-500"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(var(--primary)), #22d3ee, #a855f7, hsl(var(--primary)))",
          }}
        />
        <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-background">
          <Image
            src="https://avatars.githubusercontent.com/u/123566485?v=4"
            alt="Ege Ünlü"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </div>

      <div className="text-center lg:text-left animate-fade-up" style={delay(100)}>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">{"Ege Ünlü"}</h1>
        <p className="text-base text-muted-foreground mt-2">Senior CENG Student at IZTECH</p>
        <p className="text-base text-muted-foreground">Frontend Dev @FuEnergy</p>
      </div>

      <p
        className="text-base text-secondary-foreground leading-relaxed text-center lg:text-left min-h-[1.625em] animate-fade-up"
        style={delay(200)}
      >
        <TypingText />
      </p>

      <div className="flex gap-3">
        {socials.map(({ href, label, icon: Icon }, i) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-200 animate-fade-up"
            style={delay(300 + i * 60)}
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <div>
        <h2
          className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 text-center lg:text-left animate-fade-up"
          style={delay(450)}
        >
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {techStack.map((tech, i) => (
            <span
              key={tech.name}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border cursor-default hover:-translate-y-0.5 hover:scale-105 transition-transform duration-200 animate-fade-up ${tech.color}`}
              style={delay(500 + i * 50)}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <ViewCounter />
    </div>
  )
}

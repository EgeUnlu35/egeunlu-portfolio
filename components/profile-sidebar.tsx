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
        <p className="text-base text-muted-foreground mt-2">Frontend Developer at FuEnergy</p>
        <p className="text-base text-muted-foreground">
          CS Senior @ IYTE
        </p>
      </div>

      <p className="text-base text-secondary-foreground leading-relaxed text-center lg:text-left">
        Senior Computer Engineering student at İzmir Institute of Technology. I specialize in UI/UX Design and build scalable websites, dashboards, and mobile apps.
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
    </div>
  )
}

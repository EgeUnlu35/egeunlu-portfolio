import Image from "next/image"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-border">
        <Image
          src="/images/profile.jpg"
          alt="Ege Unlu"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold text-foreground">{"Ege Unlu"}</h1>
        <p className="text-sm text-muted-foreground mt-1">Frontend Developer</p>
        <p className="text-sm text-muted-foreground">
          CS Senior @ IYTE
        </p>
      </div>

      <p className="text-sm text-secondary-foreground leading-relaxed text-center lg:text-left">
        Final year Computer Science student at Izmir Yuksek Teknoloji Enstitusu. I build products for the web.
      </p>

      <div className="flex gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href="mailto:hello@egeunlu.com"
          className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

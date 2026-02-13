import Image from "next/image"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <div className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border-2 border-border">
        <Image
          src="/images/profile.jpg"
          alt="Ege Unlu"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">{"Ege Unlu"}</h1>
        <p className="text-base text-muted-foreground mt-2">Frontend Developer</p>
        <p className="text-base text-muted-foreground">
          CS Senior @ IYTE
        </p>
      </div>

      <p className="text-base text-secondary-foreground leading-relaxed text-center lg:text-left">
        Final year Computer Science student at Izmir Yuksek Teknoloji Enstitusu. I build products for the web.
      </p>

      <div className="flex gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="mailto:hello@egeunlu.com"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

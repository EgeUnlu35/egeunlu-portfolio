import { ProfileSidebar } from "@/components/profile-sidebar"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Project One",
    description: "A SaaS dashboard built with Next.js and Tailwind CSS for tracking analytics in real time.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com",
  },
  {
    title: "Project Two",
    description: "An open-source component library focused on accessibility and developer experience.",
    tags: ["React", "Storybook", "a11y"],
    href: "https://github.com",
  },
  {
    title: "Project Three",
    description: "A minimal markdown note-taking app with cloud sync and offline support.",
    tags: ["Next.js", "Supabase", "PWA"],
    href: "https://github.com",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
        <aside className="flex justify-center lg:justify-start">
          <ProfileSidebar />
        </aside>

        <section className="flex flex-col gap-8">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Projects
            </h2>
            <div className="flex flex-col gap-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
              Contact
            </h2>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              {"Interested in working together or just want to say hi? Reach out at "}
              <a
                href="mailto:hello@egeunlu.com"
                className="text-primary hover:underline"
              >
                hello@egeunlu.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

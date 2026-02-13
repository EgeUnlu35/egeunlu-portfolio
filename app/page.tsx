import { ProfileSidebar } from "@/components/profile-sidebar"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Aiolos",
    description: "Wind turbine control dashboard for monitoring and managing turbine performance in real time.",
    tags: ["Dashboard", "Real-time", "Energy"],
    href: "https://aiolos.app",
  },
  {
    title: "IYTE Kariyer",
    description: "Career platform connecting IYTE students with job opportunities, internships, and industry events.",
    tags: ["Platform", "Next.js", "Career"],
    href: "https://iytekariyer.com",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
        <aside className="flex justify-center lg:justify-start">
          <ProfileSidebar />
        </aside>

        <section className="flex flex-col gap-8">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

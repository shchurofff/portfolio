import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    eyebrow: "In Development",
    title: "Developer Environment",
    description:
      "A personal workspace for developers who want to keep their projects, tasks and time entries in one calm, focused place. Think of it as a lightweight alternative to Jira for those who constantly forget to fill in their tracking tables — you log in, add a project with its description and key links, create tasks, and track the time you spend on each one.",
    highlights: [
      "Project descriptions & quick-access links",
      "Task management with statuses",
      "Time entries per task",
      "Auth with guest access",
    ],
    planned:
      "Next up is a knowledge base where users can save articles, links and notes, organize them into folders and categories for easy reference later.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Better Auth",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Server Actions",
    ],
    links: [
      { label: "Live Demo", href: "https://developer-env.vercel.app/", external: true },
      { label: "GitHub", href: "https://github.com/shchurofff/developer_env", external: true },
    ],
    image: "/devenv-preview.png",
  },
];

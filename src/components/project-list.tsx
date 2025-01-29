"use client"

import ProjectCard from "./project-card"

interface Project {
  id: number
  title: string
  description: string
  type: "company" | "personal"
  images?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a description for Project 1. It's a company project with multiple images.",
    type: "personal",
    images: [
      "https://picsum.photos/id/1/160/90",
      "https://picsum.photos/id/1/160/90",
      "https://picsum.photos/id/1/160/90",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "This is a description for Project 2. It's a personal project without any images. This project focuses on backend development or other non-visual aspects, so there are no screenshots to display.",
    type: "company",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a description for Project 3. It's a company project with a single image.",
    type: "personal",
    images: ["https://picsum.photos/id/1/160/90"],
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "This is a description for Project 4. It's another personal project without images. This could be a data analysis project, an API development, or any other type of project that doesn't have a visual component.",
    type: "company",
  },
  // Add more projects as needed
]

export default function ProjectList({ filter }: { filter: "all" | "company" | "personal" }) {
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter)

  return (
    <div className="space-y-12">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
      ))}
    </div>
  )
}


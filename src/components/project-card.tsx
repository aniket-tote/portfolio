"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  type: "company" | "personal"
  images?: string[]
}

export default function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
    }
  }

  const TextContent = () => (
    <div className={project.images ? "flex-1" : "w-full"}>
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  )

  const ImageCarousel = () => {
    if (!project.images || project.images.length === 0) {
      return null
    }

    return (
      <div className="flex-1 relative">
        <img
          src={project.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-auto rounded-lg"
        />
        {project.images.length > 1 && (
          <>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
              <Button variant="outline" size="icon" onClick={prevImage}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
              <Button variant="outline" size="icon" onClick={nextImage}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className={`flex gap-8 items-center ${project.images ? (reverse ? "flex-row-reverse" : "") : ""}`}>
      <TextContent />
      <ImageCarousel />
    </div>
  )
}


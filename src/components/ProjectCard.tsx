import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
  figmaLink?: string;
  image?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "This is a sample project description that explains what the project does and the technologies used.",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  githubLink,
  liveLink,
  figmaLink,
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-md overflow-hidden flex flex-col h-full bg-white">
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600 mb-4">
          {description}
        </CardDescription>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-2 gap-2">
        {githubLink && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(githubLink, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub Repo
          </Button>
        )}
        {liveLink && (
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => window.open(liveLink, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
        )}
        {figmaLink && (
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => window.open(figmaLink, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Figma Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

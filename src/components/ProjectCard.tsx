import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

// Define the properties for the ProjectCard component
interface ProjectCardProps {
  imageUrl: string;
  title: string;
  // A short description or a list of tags can be provided
  description?: string;
  tags?: string[];
  className?: string;
}

/**
 * A reusable card component to display a single project.
 * It features a thumbnail, title, and description or tags with a subtle hover effect.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description,
  tags,
  className,
}) => {
  console.log(`ProjectCard loaded for: ${title}`);

  return (
    <Card className={cn("group relative block h-full w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl", className)}>
      <AspectRatio ratio={4 / 3}>
        <img
          src={imageUrl || 'https://via.placeholder.com/400x300?text=Project+Image'}
          alt={`Thumbnail for ${title}`}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </AspectRatio>
      
      {/* Gradient overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content positioned at the bottom of the card */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold tracking-tight">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-200 line-clamp-2">{description}</p>}
        
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
                <Badge variant="secondary" className="font-normal">
                    +{tags.length - 3}
                </Badge>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CodingProfileCardProps {
  platform: string;
  username: string;
  profileUrl: string;
  icon?: React.ReactNode;
}

const CodingProfileCard = ({
  platform = "Platform",
  username = "Username",
  profileUrl = "#",
  icon = <ExternalLink className="h-5 w-5" />,
}: CodingProfileCardProps) => {
  return (
    <Card className="w-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/20">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">{icon}</div>
          <div>
            <h3 className="font-medium">{platform}</h3>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-primary/30 text-primary hover:bg-primary hover:text-white"
          onClick={() => window.open(profileUrl, "_blank")}
        >
          <ExternalLink size={14} className="mr-1" />
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default CodingProfileCard;

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
import { ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  certificateUrl: string;
  description?: string;
}

const CertificationCard = ({
  title = "Certificate Title",
  issuer = "Certificate Issuer",
  certificateUrl = "#",
  description = "",
}: CertificationCardProps) => {
  return (
    <Card className="w-full max-w-[350px] h-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {issuer}
        </CardDescription>
      </CardHeader>

      {description && (
        <CardContent className="py-2">
          <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
        </CardContent>
      )}

      <CardFooter className="pt-2">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
          onClick={() => window.open(certificateUrl, "_blank")}
        >
          <ExternalLink size={16} />
          View Certificate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CertificationCard;

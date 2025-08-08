import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  title: string;
  link: string;
}

interface CollapsibleCertGroupProps {
  title: string;
  issuer: string;
  certificates: Certificate[];
}

const CollapsibleCertGroup = ({
  title,
  issuer,
  certificates,
}: CollapsibleCertGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full max-w-[350px] h-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/20">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-bold text-gray-800">
            {title}
          </CardTitle>
          <p className="text-sm text-gray-600">{issuer}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-primary" />
          ) : (
            <ChevronDown className="h-5 w-5 text-primary" />
          )}
        </Button>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <CardContent className="pt-0 pb-4 space-y-3">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{cert.title}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs border-primary/30 text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default CollapsibleCertGroup;

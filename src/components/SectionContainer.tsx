import React from "react";

interface SectionContainerProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "alternate";
}

const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  (
    {
      id,
      title,
      className = "",
      children,
      background = "default",
    },
    ref
  ) => {
    const bgClass = background === "alternate" ? "bg-gray-50" : "bg-white";

    return (
      <section id={id} ref={ref} className={`py-16 md:py-24 ${bgClass} ${className}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              {title}
            </h2>
          )}
          {children}
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;

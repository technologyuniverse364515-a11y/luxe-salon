import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "cream" | "dark";
}

const SectionWrapper = ({ children, className, id, variant = "default" }: SectionWrapperProps) => {
  const variants = {
    default: "bg-background text-foreground",
    cream: "bg-secondary text-foreground",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <section id={id} className={cn("section-padding", variants[variant], className)}>
      <div className="container mx-auto max-w-6xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;

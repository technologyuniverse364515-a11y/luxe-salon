import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, className, light }: SectionHeadingProps) => (
  <div className={cn("text-center mb-12 md:mb-16", className)}>
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">{title}</h2>
    {subtitle && (
      <p className={cn("text-lg max-w-2xl mx-auto", light ? "text-primary-foreground/70" : "text-muted-foreground")}>
        {subtitle}
      </p>
    )}
    <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
  </div>
);

export default SectionHeading;

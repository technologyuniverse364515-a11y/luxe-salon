import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, text, rating }: TestimonialCardProps) => (
  <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
    <p className="text-foreground/80 italic mb-4 leading-relaxed">"{text}"</p>
    <p className="font-heading font-semibold text-foreground">— {name}</p>
  </div>
);

export default TestimonialCard;

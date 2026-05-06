interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
}

const ServiceCard = ({ name, price, description }: ServiceCardProps) => (
  <div className="flex items-start justify-between py-4 border-b border-border last:border-0 group">
    <div className="flex-1">
      <h4 className="font-heading text-lg font-medium group-hover:text-gold transition-colors">{name}</h4>
      <p className="text-muted-foreground text-sm mt-1">{description}</p>
    </div>
    <span className="font-heading text-lg font-semibold text-gold ml-4 whitespace-nowrap">{price}</span>
  </div>
);

export default ServiceCard;

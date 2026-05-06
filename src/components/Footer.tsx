import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";

const footerLinks = [
  { label: ButtonLabels.Generic.headerOptions.Home, path: "/" },
  { label: ButtonLabels.Generic.headerOptions.AboutUs, path: "/about" },
  { label: ButtonLabels.Generic.headerOptions.Services, path: "/services" },
  { label: ButtonLabels.Generic.headerOptions.Gallery, path: "/gallery" },
  { label: ButtonLabels.Generic.headerOptions.Contact, path: "/contact" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-2xl font-bold tracking-widest mb-3">{ScreenText.salonName}</h3>
          <p className="text-primary-foreground/60 text-sm">{ScreenText.Footer.tagline}</p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <a href={ScreenText.phoneHref} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" /> {ScreenText.phone}
            </a>
            <a href={`mailto:${ScreenText.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" /> {ScreenText.email}
            </a>
            <span className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {ScreenText.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
        {ScreenText.Footer.copyright}
      </div>
    </div>
  </footer>
);

export default Footer;

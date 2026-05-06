import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLabels } from "@/constants/ButtonLabels";
import { ScreenText } from "@/constants/ScreenText";

const navLinks = [
  { label: ButtonLabels.Generic.headerOptions.Home, path: "/" },
  { label: ButtonLabels.Generic.headerOptions.AboutUs, path: "/about" },
  { label: ButtonLabels.Generic.headerOptions.Services, path: "/services" },
  { label: ButtonLabels.Generic.headerOptions.Gallery, path: "/gallery" },
  { label: ButtonLabels.Generic.headerOptions.Contact, path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-widest text-foreground">
          {ScreenText.salonName}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={ScreenText.phoneHref}
            className="inline-flex items-center gap-2 bg-gold-gradient text-accent-foreground px-5 py-2.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            {ButtonLabels.Generic.callNow}
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-3 px-4 rounded text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-secondary text-gold"
                    : "text-foreground/70 hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={ScreenText.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 bg-gold-gradient text-accent-foreground py-3 rounded text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              {ButtonLabels.Generic.phoneNumber}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

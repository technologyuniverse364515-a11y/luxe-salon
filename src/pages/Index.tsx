import { Link } from "react-router-dom";
import { Phone, MapPin, Scissors, Palette, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";

const serviceIcons = [Scissors, Palette, Sparkles];

const HomePage = () => {
  const t = ScreenText.Home;
  const services = ScreenText.Services.categories;
  const testimonials = ScreenText.Testimonials;
  const gallery = ScreenText.Gallery.images.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Luxe Salon interior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.headline}
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">{t.subText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ScreenText.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-accent-foreground px-8 py-3.5 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" /> {ButtonLabels.Home.primaryCTA}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              {ButtonLabels.Home.secondaryCTA}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">{t.introTitle}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t.introText}</p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-8" />
        </div>
      </SectionWrapper>

      {/* Services Preview */}
      <SectionWrapper variant="cream">
        <SectionHeading title={t.servicesTitle} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((cat, i) => {
            const Icon = serviceIcons[i];
            return (
              <div key={cat.name} className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-border">
                <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">{cat.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {cat.services.slice(0, 2).map((s) => s.name).join(" · ")}
                </p>
                <p className="text-gold font-semibold text-sm">
                  Starting at {cat.services[0].price}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-6 py-3 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {ButtonLabels.Home.servicesMore}
          </Link>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <SectionHeading title={t.testimonialsTitle} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </SectionWrapper>

      {/* Gallery Preview */}
      <SectionWrapper variant="cream">
        <SectionHeading title={t.galleryTitle} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gallery.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-6 py-3 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {ButtonLabels.Home.galleryMore}
          </Link>
        </div>
      </SectionWrapper>

      {/* Location */}
      <SectionWrapper>
        <SectionHeading title={t.locationTitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-semibold">{ScreenText.address}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-heading text-lg font-semibold mb-3">Business Hours</h4>
              {ScreenText.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm py-1.5 border-b border-border last:border-0">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border aspect-video">
            <iframe
              src={ScreenText.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t.ctaTitle}</h2>
          <p className="text-primary-foreground/70 mb-8">{t.ctaSubText}</p>
          <a
            href={ScreenText.phoneHref}
            className="inline-flex items-center gap-2 bg-gold-gradient text-accent-foreground px-8 py-3.5 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" /> {ButtonLabels.Home.primaryCTA}
          </a>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HomePage;

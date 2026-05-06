import { Phone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";

const ServicesPage = () => {
  const t = ScreenText.Services;

  return (
    <>
      <SectionWrapper className="pt-24 md:pt-32">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="space-y-12">
          {t.categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center md:text-left">{cat.name}</h3>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                {cat.services.map((svc) => (
                  <ServiceCard key={svc.name} {...svc} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">{ScreenText.Home.ctaTitle}</h2>
          <p className="text-primary-foreground/70 mb-8">{ScreenText.Home.ctaSubText}</p>
          <a
            href={ScreenText.phoneHref}
            className="inline-flex items-center gap-2 bg-gold-gradient text-accent-foreground px-8 py-3.5 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" /> {ButtonLabels.Services.cta}
          </a>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ServicesPage;

import { Phone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";

const AboutPage = () => {
  const t = ScreenText.About;

  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-24 md:pt-32">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground leading-relaxed">
          <p>{t.story}</p>
          <p>{t.storyExtra}</p>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper variant="cream">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.experienceHighlights.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Owner */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden aspect-[3/4] max-w-sm mx-auto md:mx-0">
            <img src={t.team[0].image} alt={t.ownerName} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">{t.ownerName}</h3>
            <p className="text-gold font-medium mb-4">{t.ownerTitle}</p>
            <p className="text-muted-foreground leading-relaxed">{t.ownerBio}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper variant="cream">
        <SectionHeading title={t.teamTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {t.team.map((member) => (
            <div key={member.name} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-lg font-semibold">{member.name}</h4>
                <p className="text-gold text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-6">{ScreenText.Home.ctaTitle}</h2>
          <a
            href={ScreenText.phoneHref}
            className="inline-flex items-center gap-2 bg-gold-gradient text-accent-foreground px-8 py-3.5 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" /> {ButtonLabels.About.cta}
          </a>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutPage;

import { useState } from "react";
import { X } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ScreenText } from "@/constants/ScreenText";

const GalleryPage = () => {
  const t = ScreenText.Gallery;
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SectionWrapper className="pt-24 md:pt-32">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {t.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={t.images[lightbox].src}
            alt={t.images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default GalleryPage;

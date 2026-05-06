import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";
import { Messages } from "@/constants/Messages";

const ContactPage = () => {
  const t = ScreenText.Contact;
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error(Messages.Contact.validationError);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(Messages.Contact.success);
      setForm({ name: "", phone: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <SectionWrapper className="pt-24 md:pt-32">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">{t.formFields.name}</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-input rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t.formFields.phone}</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-input rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t.formFields.message}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-input rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-gold-gradient text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? Messages.Generic.loading : ButtonLabels.Contact.submitButton}
              </button>
              <a
                href={ScreenText.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-foreground px-6 py-3 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" /> {ButtonLabels.Contact.callButton}
              </a>
            </div>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href={ScreenText.phoneHref} className="text-muted-foreground hover:text-gold transition-colors">
                  {ScreenText.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Email</p>
                <a href={`mailto:${ScreenText.email}`} className="text-muted-foreground hover:text-gold transition-colors">
                  {ScreenText.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-muted-foreground">{ScreenText.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-semibold mb-2">Business Hours</p>
                {ScreenText.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm py-1 gap-4">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border aspect-video mt-4">
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
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactPage;

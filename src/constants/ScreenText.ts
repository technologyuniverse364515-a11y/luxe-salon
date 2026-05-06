import ownerImg from "@/assets/owner.jpg";
import team1Img from "@/assets/team-1.jpg";
import team2Img from "@/assets/team-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const ScreenText = {
  salonName: "LUXE SALON",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  address: "1234 Elm Street, Suite 100, Los Angeles, CA 90001",
  email: "hello@luxesalon.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.24!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzAwLjAiTiAxMTjCsDE0JzI0LjAiVw!5e0!3m2!1sen!2sus!4v1700000000000",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  Home: {
    headline: "Where Style Meets Perfection",
    subText:
      "Experience premium grooming and hair styling in the heart of Los Angeles. Walk in confident, walk out transformed.",
    introTitle: "Welcome to Luxe Salon",
    introText:
      "At Luxe Salon, we believe that a great haircut is more than just a service — it's an experience. Our team of expert stylists and barbers bring years of precision and passion to every chair. Whether you're looking for a classic cut, bold color, or a relaxing grooming session, we've got you covered.",
    servicesTitle: "Our Signature Services",
    testimonialsTitle: "What Our Clients Say",
    galleryTitle: "Our Work",
    locationTitle: "Visit Us",
    ctaTitle: "Ready for a New Look?",
    ctaSubText:
      "Walk-ins welcome. Call us today to book your appointment and experience the Luxe difference.",
  },
  About: {
    title: "About Luxe Salon",
    subtitle: "Crafting Confidence Since 2012",
    story:
      "Founded in 2012 in the heart of Los Angeles, Luxe Salon was born from a simple belief: everyone deserves to look and feel their best. What started as a small two-chair barbershop has grown into one of LA's most trusted salons, serving thousands of clients every year.",
    storyExtra:
      "We combine traditional grooming techniques with modern styling trends to deliver results that exceed expectations. Our salon is more than a place to get a haircut — it's a community where every client becomes family.",
    ownerName: "Marcus Rivera",
    ownerTitle: "Founder & Lead Stylist",
    ownerBio:
      "With over 15 years of experience in the industry, Marcus has trained at top academies across the country and brings a unique blend of artistry and precision to every cut. His vision for Luxe Salon was to create a space where quality, comfort, and style come together seamlessly.",
    experienceHighlights: [
      { value: "12+", label: "Years of Experience" },
      { value: "15,000+", label: "Happy Clients" },
      { value: "5", label: "Expert Stylists" },
      { value: "4.9★", label: "Average Rating" },
    ],
    teamTitle: "Meet the Team",
    team: [
      {
        name: "Marcus Rivera",
        role: "Founder & Lead Stylist",
        image: ownerImg,
        bio: "15+ years of experience. Specializes in precision cuts and classic styling.",
      },
      {
        name: "Sophia Chen",
        role: "Senior Colorist",
        image: team1Img,
        bio: "Expert in balayage, highlights, and creative color transformations.",
      },
      {
        name: "Jake Morrison",
        role: "Master Barber",
        image: team2Img,
        bio: "Specializes in fades, beard grooming, and contemporary men's styles.",
      },
    ],
  },
  Services: {
    title: "Our Services",
    subtitle: "Premium grooming tailored to your style",
    categories: [
      {
        name: "Haircuts",
        services: [
          { name: "Classic Men's Cut", price: "$35", description: "Precision cut with hot towel finish" },
          { name: "Women's Cut & Style", price: "$55", description: "Cut, wash, blow-dry, and styling" },
          { name: "Kids' Haircut", price: "$25", description: "For children 12 and under" },
          { name: "Buzz Cut / Crew Cut", price: "$20", description: "Clean, sharp, and efficient" },
        ],
      },
      {
        name: "Styling & Color",
        services: [
          { name: "Balayage / Highlights", price: "$120+", description: "Hand-painted highlights for a natural look" },
          { name: "Full Color", price: "$85+", description: "Single-process root to tip color" },
          { name: "Blowout & Style", price: "$45", description: "Wash, blow-dry, and style" },
          { name: "Special Occasion Updo", price: "$75+", description: "Perfect for weddings and events" },
        ],
      },
      {
        name: "Beard & Grooming",
        services: [
          { name: "Beard Trim & Shape", price: "$20", description: "Precision trim and lineup" },
          { name: "Hot Towel Shave", price: "$30", description: "Classic straight-razor shave" },
          { name: "Haircut + Beard Combo", price: "$50", description: "Full cut and beard grooming" },
          { name: "Scalp Treatment", price: "$40", description: "Deep cleanse and massage" },
        ],
      },
    ],
  },
  Gallery: {
    title: "Our Gallery",
    subtitle: "A showcase of our finest work",
    images: [
      { src: gallery1, alt: "Men's precision haircut" },
      { src: gallery2, alt: "Women's color treatment" },
      { src: gallery3, alt: "Modern fade haircut" },
      { src: gallery4, alt: "Beard grooming session" },
      { src: gallery5, alt: "Styled waves" },
      { src: gallery6, alt: "Salon interior" },
    ],
  },
  Contact: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you",
    formFields: {
      name: "Your Name",
      phone: "Phone Number",
      message: "Your Message",
    },
  },
  Testimonials: [
    {
      name: "David K.",
      text: "Best haircut I've ever had. Marcus and his team truly care about quality. I won't go anywhere else.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "Sophia did an incredible balayage on my hair. I get compliments everywhere I go. The salon is gorgeous too!",
      rating: 5,
    },
    {
      name: "James R.",
      text: "The hot towel shave is an experience you need to try. Super relaxing and the results are flawless.",
      rating: 5,
    },
  ],
  Footer: {
    tagline: "Premium Hair Salon in Los Angeles",
    copyright: `© ${new Date().getFullYear()} Luxe Salon. All rights reserved.`,
  },
};

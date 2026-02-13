import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chief Okafor",
    role: "Homeowner, Awka",
    text: "ARCHI-SHELTERS delivered our dream home beyond expectations. The attention to detail and professionalism was outstanding. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mrs. Adaeze Nnamdi",
    role: "Business Owner",
    text: "They built our commercial plaza on time and within budget. The structural quality is top-notch. I wouldn't use any other construction company.",
    rating: 5,
  },
  {
    name: "Engr. Chukwuemeka",
    role: "Property Developer",
    text: "Working with Nwokafor Construction has been a game changer. Their architectural designs are modern, functional, and always impressive.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-lg font-semibold">
              4.9 out of 5
            </span>
            <span className="text-primary-foreground/60 text-sm">
              (16 reviews)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-accent/40 mb-4" />
              <p className="text-primary-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <h4 className="font-heading font-semibold text-primary-foreground">
                  {t.name}
                </h4>
                <p className="text-primary-foreground/60 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

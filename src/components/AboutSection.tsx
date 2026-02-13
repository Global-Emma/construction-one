import { Shield, Target, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, transparent practices in every project we undertake.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail from foundation to finishing.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Modern designs that blend aesthetics with structural excellence.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering quality that exceeds expectations, every time.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Crafting Architectural Excellence Since Day One
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nwokafor Construction / ARCHI-SHELTERS is a trusted name in architectural
              design and building construction in Anambra State. With over 15 years of
              experience, we have successfully delivered hundreds of residential,
              commercial, and industrial projects.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of skilled architects, engineers, and project managers work
              collaboratively to bring your vision to life — on time, on budget, and
              beyond expectation. We are committed to building structures that stand the
              test of time.
            </p>

            <div className="flex gap-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-accent">Our Mission</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  To deliver world-class construction and architectural services that
                  transform communities and create lasting value.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-accent">Our Vision</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  To be the most trusted and innovative construction firm in
                  South-East Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Right — values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card shadow-card hover:shadow-card-hover transition-shadow duration-300 rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                  {v.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

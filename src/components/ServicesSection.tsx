import {
  Ruler,
  Building2,
  Landmark,
  Paintbrush,
  HardHat,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Architectural Design",
    description:
      "Custom architectural blueprints and 3D visualizations tailored to your vision, environment, and budget.",
  },
  {
    icon: Building2,
    title: "Building Construction",
    description:
      "End-to-end construction of residential, commercial, and industrial buildings to the highest standards.",
  },
  {
    icon: Landmark,
    title: "Structural Planning",
    description:
      "Comprehensive structural analysis and planning that ensures safety, durability, and regulatory compliance.",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    description:
      "Breathe new life into existing structures with our expert renovation and interior remodeling services.",
  },
  {
    icon: HardHat,
    title: "Project Supervision",
    description:
      "On-site project management ensuring timelines, quality, and budget adherence from start to finish.",
  },
  {
    icon: MessageSquare,
    title: "Consultation Services",
    description:
      "Expert advice on building regulations, material selection, cost estimation, and project feasibility.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What We Do Best
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we provide comprehensive construction and
            architectural solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

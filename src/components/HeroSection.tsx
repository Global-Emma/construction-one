import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-sm font-medium">
              4.9 Rating · 16 Reviews
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up animate-slide-up-delay-1">
            Building Structures.{" "}
            <span className="text-gradient-gold">Creating Legacies.</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed animate-slide-up animate-slide-up-delay-2">
            Premier architectural design and construction services in Anambra State.
            We transform visions into lasting structures with precision,
            creativity, and unwavering commitment to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-slide-up-delay-3">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 shadow-gold gap-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#projects">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
              >
                View Our Projects
              </Button>
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up animate-slide-up-delay-4">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "200+", label: "Projects Completed" },
            { number: "4.9", label: "Star Rating" },
            { number: "24/7", label: "Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-5"
            >
              <div className="font-heading text-3xl font-bold text-accent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

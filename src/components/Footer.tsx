import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-2">ARCHI-SHELTERS</h3>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Nwokafor Construction
            </p>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Building structures and creating legacies across Anambra State and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Architectural Design</li>
              <li>Building Construction</li>
              <li>Structural Planning</li>
              <li>Renovation & Remodeling</li>
              <li>Project Supervision</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="tel:08163438101" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  0816 343 8101
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  Malaika Compound, Agu-akidi, Umuokpu, Anambra
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">info@archishelters.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Nwokafor Construction / ARCHI-SHELTERS. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs">
            Building with integrity in Anambra State
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

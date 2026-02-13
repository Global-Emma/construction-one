import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            ARCHI-SHELTERS
          </span>
          <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">
            Nwokafor Construction
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:08163438101">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-gold gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/80 hover:text-accent transition-colors py-2 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:08163438101" className="mt-2">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

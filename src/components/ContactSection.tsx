import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Let's Build Together
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your project? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:08163438101" className="text-accent hover:underline font-medium">
                  0816 343 8101
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground">
                  Malaika Compound, Agu-akidi,
                  <br />
                  beside Osuma, Umuokpu 420211, Anambra
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  Business Hours
                </h4>
                <p className="text-muted-foreground">Open 24 Hours — 7 Days a Week</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">info@archishelters.com</p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-border shadow-card h-56">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3!2d7.05!3d6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJOIDfCsDAzJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 border border-border shadow-card space-y-6"
          >
            <h3 className="font-heading text-2xl font-bold text-card-foreground mb-2">
              Request a Quote
            </h3>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-background"
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-background"
            />
            <Input
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-background"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-background resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-gold gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

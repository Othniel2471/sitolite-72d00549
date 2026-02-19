import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Sitolite</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with cutting-edge IT solutions and cybersecurity services.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: "Cybersecurity", path: "/cybersecurity" },
                { name: "Cloud Services", path: "/cloud-services" },
                { name: "IT Infrastructure", path: "/it-infrastructure" },
                { name: "Data Analytics", path: "/data-analytics" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "Case Studies", path: "/case-studies" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" /> hello@sitolite.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" /> San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2026 Sitolite. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="border-t border-border py-8 overflow-hidden">
        <h2 className="font-display text-[8rem] md:text-[12rem] font-bold text-foreground/5 text-center leading-none select-none">
          Sitolite
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

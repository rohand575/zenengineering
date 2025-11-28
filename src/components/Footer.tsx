import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  const services = [
    "Acoustic Engineering",
    "HVAC Design",
    "Insulation Services",
    "Installation",
    "Maintenance",
  ];

  return (
    <footer className="relative bg-[#050A14] pt-20 pb-10 overflow-hidden border-t border-white/10">
      
      {/* --- Background Elements (Matches Hero) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
        />
        {/* Subtle Blue Glow in bottom right */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* --- COLUMN 1: Brand (Span 4 cols) --- */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              {/* Logo matches Navbar */}
              <div className="relative h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
                <img
                  src="/zen-logo.png"
                  alt="Zen Engineering"
                  className="h-6 w-6 object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white leading-none">
                  ZEN<span className="text-blue-400"> </span>ENGINEERING
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mt-1">
                  Industrial Solutions
                </span>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm pr-4">
              Delivering excellence through cutting-edge acoustic engineering, HVAC design, insulation, and maintenance services for critical infrastructure.
            </p>

            {/* Socials - Glass Buttons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 group"
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* --- COLUMN 2: Quick Links (Span 2 cols) --- */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Company
              <span className="h-1 w-1 rounded-full bg-blue-500"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: Services (Span 3 cols) --- */}
          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Expertise
              <span className="h-1 w-1 rounded-full bg-blue-500"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-400 hover:text-white transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 4: Contact (Span 3 cols) --- */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Get in Touch
              <span className="h-1 w-1 rounded-full bg-blue-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400 group">
                <div className="mt-1 p-2 rounded-full bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed space-y-2 flex flex-col">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Flat+No.+001%2C+Shree+Ram+Siddhi+Apartment%2C+100+Feet+Road%2C+near+Chetna+Petrol+Pump%2C+Sangli+416416"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    <strong>Sangli (Head Office):</strong> Flat No. 001, Shree Ram Siddhi Apartment, 100 Feet Road, near Chetna Petrol Pump, Sangli - 416416
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SofX%2C+Below+Bank+of+Baroda%2C+Ruikar+Colony%2C+E-Ward%2C+Kolhapur+416005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    <strong>Kolhapur:</strong> SofX - Below Bank of Baroda, Ruikar Colony, E-Ward, Kolhapur - 416005
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Trimurti+Bungalow%2C+Unit+No.+2%2C+Plot+No.+38%2C+Gananjay+Housing+Society%2C+Gandhi+Bhavan+Road%2C+Kothrud%2C+Pune+411038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    <strong>Pune:</strong> Trimurti Bungalow, Unit No. 2, Plot No. 38, Gananjay Housing Society, Gandhi Bhavan Road, Kothrud, Pune - 411038
                  </a>
                </span>
              </li>
              
              <li className="flex items-center gap-3 text-sm text-slate-400 group">
                <div className="p-2 rounded-full bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+919610029008" className="hover:text-white transition-colors">
                  +91 96100 29008
                </a>
              </li>
              
              <li className="flex items-center gap-3 text-sm text-slate-400 group">
                <div className="p-2 rounded-full bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:sales@zenengineerings.com" className="hover:text-white transition-colors">
                  sales@zenengineerings.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Zen Engineering Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

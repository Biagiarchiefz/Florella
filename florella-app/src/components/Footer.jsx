import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router"

const Footer = () => {
  const navigationLinks = [
    { label: "Catalog", href: "/catalog" },
    { label: "Payment", href: "/payment" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contacts", href: "/contacts" },
    { label: "Company", href: "/company" },
  ];

  return (
    <footer className="bg-footer text-footer-foreground py-15 px-4 bg-[#1B1B1B] text-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-40 items-center">
            
          {/* Brand and Social */}
          <div className="lg:col-span-1 flex justify-between items-center w-full md:flex-col">
            <h2 className="text-3xl font-bold md:mb-4">Florella</h2>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border bg-[#F5F5F5] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#F5F5F5]"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border bg-[#F5F5F5] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#F5F5F5]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Button>
            </div>
          </div>

          <div className="flex md:flex-col lg:col-span-1 gap-5 mt-5 order-2 md:order-1 w-full justify-between">
            {/* Navigation Links */}
            <div className="">
              <nav className="flex flex-col md:flex-row gap-4">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-footer-muted hover:text-footer-foreground transition-colors text-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* App Downloads and Payment */}
            <div className="flex flex-col md:flex-row gap-3 items-center ">
          
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-14"
                />
      
           
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-6"
                />
          
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-3 border-l pl-3 flex flex-col order-1 md:order-2 w-full gap-2 md:gap-0">

            <div className="flex items-center gap-2 text-md">
              <Phone size={16} className="text-footer-muted" />
              <span>+37529 555 44 87</span>
            </div>

            <div className="flex items-center gap-2 text-md">
              <Mail size={16} className="text-footer-muted" />
              <span>florella@gmail.com</span>
            </div>

            <div className="flex items-start gap-2 text-md">
              <MapPin size={16} className="text-footer-muted mt-0.5" />
              <span>Minsk, 102 Suvorova str.</span>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

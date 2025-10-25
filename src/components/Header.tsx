import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { name: t.nav.features, href: "#features" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.faq, href: "#faq" },
    { name: t.nav.contact, href: "#contact" },
  ];


  return (
    <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="IPTV España" 
              className="h-10 md:h-12 group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" className="gap-2" asChild>
              <a href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex justify-center pb-2">
              <LanguageSwitcher />
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="hero" size="lg" className="w-full gap-2" asChild>
              <a href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

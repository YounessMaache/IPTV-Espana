import { Button } from "@/components/ui/button";
import { Play, Tv } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-20 justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <Tv className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Servicio IPTV Premium</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            IPTV
            <span className="text-gradient-primary"> España</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Accede a más de <span className="text-primary font-semibold">20,000+</span> canales y{" "}
            <span className="text-secondary font-semibold">80,000+</span> películas y series en calidad{" "}
            <span className="font-semibold">4K, FHD y HD</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" className="gap-3" asChild>
              <a href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                Empezar Ahora
              </a>
            </Button>
            <Button variant="cta" size="xl" className="gap-3" asChild>
              <a href="#pricing">
                <Tv className="w-5 h-5" />
                Ver Planes
              </a>
            </Button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Sin Cortes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Activación Instantánea</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

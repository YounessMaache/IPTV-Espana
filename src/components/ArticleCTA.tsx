import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const ArticleCTA = () => {
  return (
    <div className="my-12 p-8 rounded-2xl gradient-card border border-border">
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold">
          ¿Listo para Disfrutar de <span className="text-gradient-primary">IPTV Premium</span>?
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Accede a más de 20,000 canales y 80,000 películas y series con la mejor calidad.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="gap-2" asChild>
            <a href="/">
              Ver Planes y Precios
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="cta" size="lg" className="gap-2" asChild>
            <a href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCTA;
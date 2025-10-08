import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 gradient-card p-12 rounded-3xl border border-border shadow-card">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para Empezar a <span className="text-gradient-primary">Ver</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a miles de clientes satisfechos disfrutando del servicio IPTV premium. 
            ¡Obtén acceso instantáneo a más de 20,000 canales hoy!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" className="gap-3" asChild>
              <a href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>

          <div className="pt-4 text-sm text-muted-foreground">
            <p>⚡ Activación Instantánea • 💯 Garantía de 7 Días • 🔒 Pago Seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

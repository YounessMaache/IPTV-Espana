import { Zap, Shield, Smartphone, HeadphonesIcon, Film, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Servidores Ultra Rápidos",
    description: "Servidores de 5ª generación con tecnología anti-congelamiento para streaming fluido",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Shield,
    title: "Estable y Confiable",
    description: "Garantía de disponibilidad del 99.9% sin buffering ni interrupciones",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    icon: Smartphone,
    title: "Todos los Dispositivos",
    description: "Compatible con Smart TV, Fire Stick, iOS, Android, PC y más",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Film,
    title: "Calidad 4K",
    description: "Transmite en calidad 4K, FHD, HD y SD según tu preferencia",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte 24/7",
    description: "Soporte personalizado por WhatsApp y Telegram en cualquier momento",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: TrendingUp,
    title: "Activación Instantánea",
    description: "Tu servicio IPTV se activa inmediatamente después de la compra",
    gradient: "from-secondary/20 to-secondary/5"
  },
];

const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Por Qué Elegir <span className="text-gradient-secondary">Nuestro Servicio</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Servicio IPTV premium con 9 años de experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-card group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Tv, Smartphone, Monitor, TabletSmartphone } from "lucide-react";

const devices = [
  { name: "Smart TV", icon: Tv, description: "Samsung, LG, Sony, etc." },
  { name: "Móvil y Tablet", icon: Smartphone, description: "iOS y Android" },
  { name: "Ordenador", icon: Monitor, description: "Windows, Mac, Linux" },
  { name: "Dispositivos Streaming", icon: TabletSmartphone, description: "Fire Stick, Roku, etc." },
];

const DeviceCompatibility = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mira en <span className="text-gradient-secondary">Cualquier Dispositivo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transmite en tus dispositivos favoritos - solo necesitas conexión a internet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative gradient-card p-8 rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{device.name}</h3>
                  <p className="text-sm text-muted-foreground">{device.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Compatible con: Smart TV, Android TV, Fire Stick, Roku, MAG, Apple TV, iPhone, iPad, teléfonos y tablets Android, PC Windows, Mac y más
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeviceCompatibility;

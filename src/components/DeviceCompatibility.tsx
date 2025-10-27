import { Tv, Smartphone, Monitor, TabletSmartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const DeviceCompatibility = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const devices = [
    { name: t.devices.smartTV, icon: Tv, description: t.devices.smartTVDesc },
    { name: t.devices.mobileTablet, icon: Smartphone, description: t.devices.mobileTabletDesc },
    { name: t.devices.computer, icon: Monitor, description: t.devices.computerDesc },
    { name: t.devices.streaming, icon: TabletSmartphone, description: t.devices.streamingDesc },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.devices.title} <span className="text-gradient-secondary">{t.devices.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.devices.description}
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
            {t.devices.compatible}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeviceCompatibility;

import { Zap, Shield, Smartphone, HeadphonesIcon, Film, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];

    const features = [
    {
      icon: Zap,
      title: t.features.ultraFastServers,
      description: t.features.ultraFastServersDesc,
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Shield,
      title: t.features.stableReliable,
      description: t.features.stableReliableDesc,
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Smartphone,
      title: t.features.allDevices,
      description: t.features.allDevicesDesc,
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Film,
      title: t.features.quality4k,
      description: t.features.quality4kDesc,
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: HeadphonesIcon,
      title: t.features.support247,
      description: t.features.support247Desc,
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: TrendingUp,
      title: t.features.instantActivation,
      description: t.features.instantActivationDesc,
      gradient: "from-secondary/20 to-secondary/5"
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.features.title} <span className="text-gradient-secondary">{t.features.titleHighlight}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.features.subtitle}
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

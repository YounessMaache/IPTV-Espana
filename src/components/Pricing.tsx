import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useEffect } from "react";

const plans = [
  {
    name: "1 Mes",
    price: "€7",
    period: "mes",
    planId: "P-4SX77904US014092DNDOUPHQ",
    containerId: "paypal-button-container-P-4SX77904US014092DNDOUPHQ",
    features: [
      "20,000+ Canales en Vivo",
      "80,000+ Películas y Series",
      "Netflix, Amazon Prime, Disney+ y Más",
      "Calidad 4K/FHD/HD",
      "Todos los Dispositivos",
      "Soporte 24/7",
      "Tecnología Anti-Congelamiento",
      "Guía EPG Incluida",
      "Ayuda de Instalación Gratis"
    ],
    popular: false
  },
  {
    name: "6 Meses",
    price: "€25",
    period: "6 meses",
    savings: "Ahorra 30%",
    planId: "P-7SD92671U01321630NDOURKY",
    containerId: "paypal-button-container-P-7SD92671U01321630NDOURKY",
    features: [
      "20,000+ Canales en Vivo",
      "80,000+ Películas y Series",
      "Netflix, Amazon Prime, Disney+ y Más",
      "Calidad 4K/FHD/HD",
      "Todos los Dispositivos",
      "Soporte 24/7",
      "Tecnología Anti-Congelamiento",
      "Guía EPG Incluida",
      "Ayuda de Instalación Gratis"
    ],
    popular: true
  },
  {
    name: "12 Meses",
    price: "€35",
    period: "año",
    savings: "Ahorra 50%",
    planId: "P-1FP699314S8861355NDOUSQI",
    containerId: "paypal-button-container-P-1FP699314S8861355NDOUSQI",
    features: [
      "20,000+ Canales en Vivo",
      "80,000+ Películas y Series",
      "Netflix, Amazon Prime, Disney+ y Más",
      "Calidad 4K/FHD/HD",
      "Todos los Dispositivos",
      "Soporte 24/7",
      "Tecnología Anti-Congelamiento",
      "Guía EPG Incluida",
      "Ayuda de Instalación Gratis"
    ],
    popular: false
  }
];

const Pricing = () => {
  useEffect(() => {
    // Check if PayPal script already exists
    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
    
    if (existingScript) {
      // If script exists, just initialize buttons
      if (window.paypal) {
        initializePayPalButtons();
      }
      return;
    }

    // Load PayPal SDK with correct client ID
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AUH2MiIMqHuniKWrNEv7H7aoK8ocIS5XEfmTu6i9MxN_34FbUCHugEU-tgi9PpYvAbFboGX0lU0SucbY&vault=true&intent=subscription";
    script.setAttribute('data-sdk-integration-source', 'button-factory');
    script.async = true;
    
    script.onload = () => {
      initializePayPalButtons();
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Don't remove script on cleanup to prevent re-initialization issues
    };
  }, []);

  const initializePayPalButtons = () => {
    plans.forEach((plan) => {
      const container = document.getElementById(plan.containerId);
      
      // Only initialize if container exists and is empty
      if (container && !container.hasChildNodes() && window.paypal) {
        window.paypal.Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe'
          },
          createSubscription: function(data: any, actions: any) {
            return actions.subscription.create({
              plan_id: plan.planId
            });
          },
          onApprove: function(data: any) {
            window.location.href = '/success';
          }
        }).render(`#${plan.containerId}`);
      }
    });
  };

  return (
    <section className="py-20 relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Elige Tu <span className="text-gradient-primary">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sin tarifas ocultas. Cancela en cualquier momento. Activación instantánea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular
                  ? "border-2 border-primary shadow-glow-primary scale-105"
                  : "border-border"
              } bg-card hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-primary px-4 py-1 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">Más Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.savings && (
                  <div className="text-secondary text-sm font-semibold mb-2">
                    {plan.savings}
                  </div>
                )}
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-gradient-primary">{plan.price}</span>
                  <span className="text-muted-foreground mb-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div id={plan.containerId} className="w-full"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Quieres ser revendedor? ¡Gana dinero con nuestro programa de revendedores!
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              Programa de Revendedores
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Extend Window interface for PayPal
declare global {
  interface Window {
    paypal?: any;
  }
}

export default Pricing;

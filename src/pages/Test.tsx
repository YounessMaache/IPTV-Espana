import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Test = () => {
  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AZsFXAiZndsoKtKVzY0TTO06-ECdBTlIkq3jS7I3VGj81VyHT8kepyzREYUhTrL6Pm_ElmYPYYnDIh-e&vault=true&intent=subscription";
    script.setAttribute('data-sdk-integration-source', 'button-factory');
    script.async = true;
    
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe'
          },
          createSubscription: function(data: any, actions: any) {
            return actions.subscription.create({
              plan_id: 'P-79540451GJ052970ENDPZMSY'
            });
          },
          onApprove: function(data: any, actions: any) {
            window.location.href = '/success';
          }
        }).render('#paypal-button-container-P-79540451GJ052970ENDPZMSY');
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Suscripción de Prueba</h1>
          <div className="bg-card border border-border rounded-lg p-8">
            <div id="paypal-button-container-P-79540451GJ052970ENDPZMSY"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Test;

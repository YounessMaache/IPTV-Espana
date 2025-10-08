import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es IPTV?",
    answer: "IPTV (Televisión por Protocolo de Internet) es un protocolo de transmisión de televisión digital que entrega contenido de TV a través de internet. A diferencia de la TV por cable o satélite tradicional, IPTV te permite transmitir canales en vivo, películas y series directamente a tu dispositivo mediante una conexión a internet."
  },
  {
    question: "¿Qué dispositivos son compatibles?",
    answer: "Nuestro servicio IPTV funciona en prácticamente cualquier dispositivo con conexión a internet, incluyendo Smart TVs (Samsung, LG, Sony), Android TV, Fire Stick, Roku, Apple TV, cajas MAG, teléfonos/tablets iOS y Android, PC Windows, Mac y ordenadores Linux."
  },
  {
    question: "¿Necesito una VPN?",
    answer: "Si bien no se requiere una VPN para usar nuestro servicio, recomendamos usar una para privacidad y seguridad adicionales al transmitir contenido en línea. Una VPN también puede ayudar si tu ISP limita el tráfico de streaming."
  },
  {
    question: "¿Qué tan rápido debe ser mi internet?",
    answer: "Recomendamos una velocidad mínima de internet de 10 Mbps para streaming HD y 25 Mbps para streaming 4K. Para la mejor experiencia, una conexión estable es más importante que la velocidad pura."
  },
  {
    question: "¿Es difícil la instalación?",
    answer: "¡Para nada! La instalación es muy simple y toma solo unos minutos. Proporcionamos guías detalladas para todos los dispositivos, y nuestro equipo de soporte 24/7 siempre está disponible para ayudarte a configurar."
  },
  {
    question: "¿Puedo usar una suscripción en varios dispositivos?",
    answer: "¡Sí! Nuestras suscripciones te permiten usar el servicio en múltiples dispositivos. Sin embargo, el número de transmisiones simultáneas depende de tu plan. Contáctanos para paquetes multidispositivo."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos varios métodos de pago incluyendo tarjetas de crédito/débito, PayPal, transferencias bancarias y criptomonedas. Todos los pagos se procesan de forma segura."
  },
  {
    question: "¿Ofrecen reembolsos?",
    answer: "Sí, ofrecemos una garantía de satisfacción. Si no estás satisfecho con nuestro servicio dentro de los primeros 7 días, contáctanos y procesaremos un reembolso completo, sin preguntas."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Preguntas <span className="text-gradient-primary">Frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas? ¡Tenemos respuestas!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

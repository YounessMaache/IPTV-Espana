import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Success = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="gradient-card p-12 rounded-3xl border border-border shadow-card text-center space-y-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {t.success.title} <span className="text-gradient-primary">{t.success.titleHighlight}</span>!
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.success.subtitle}
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-bold">{t.success.nextStep}</h2>
              <p className="text-muted-foreground">
                {t.success.nextStepDesc}
              </p>
            </div>

            <Button variant="hero" size="default" className="gap-2 w-full sm:w-auto text-sm" asChild>
              <a 
                href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                {t.success.contactButton}
              </a>
            </Button>

            <div className="pt-4 text-sm text-muted-foreground">
              <p>{t.success.features}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Success;

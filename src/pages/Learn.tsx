import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "que-es-iptv-como-funciona",
    title: "¿Qué es IPTV y Cómo Funciona?",
    description: "Descubre todo sobre IPTV, la tecnología que está revolucionando la forma de ver televisión.",
    category: "Guía Básica"
  },
  {
    slug: "como-instalar-iptv-firestick",
    title: "Cómo Instalar IPTV en Fire TV Stick",
    description: "Guía paso a paso para configurar IPTV en tu Amazon Fire TV Stick en minutos.",
    category: "Tutorial"
  },
  {
    slug: "configurar-iptv-smart-tv",
    title: "Configurar IPTV en Smart TV",
    description: "Aprende a configurar IPTV en Samsung, LG, Sony y otras Smart TVs fácilmente.",
    category: "Tutorial"
  },
  {
    slug: "iptv-vs-cable-tv",
    title: "IPTV vs Cable TV: ¿Cuál es Mejor en 2025?",
    description: "Comparación completa entre IPTV y televisión por cable. Ventajas, desventajas y precios.",
    category: "Comparativa"
  },
  {
    slug: "solucionar-buffering-iptv",
    title: "Cómo Solucionar el Buffering en IPTV",
    description: "7 soluciones efectivas para eliminar los cortes y mejorar la calidad de streaming.",
    category: "Soporte"
  },
  {
    slug: "iptv-gratis-tv",
    title: "IPTV Gratis para TV: La Guía Completa 2025",
    description: "Descubre cómo configurar IPTV gratis para TV en 2025. Guía paso a paso con apps gratuitas y listas M3U.",
    category: "Guía Completa"
  },
  {
    slug: "iptv-smart-player",
    title: "IPTV Smart Player: Las 8 Mejores Aplicaciones",
    description: "Guía completa de IPTV Smart Player - descarga, configuración y comparativa de los mejores reproductores.",
    category: "Apps"
  },
  {
    slug: "iptv-gratis-android",
    title: "IPTV Gratis Android: Mejores Apps y Configuración",
    description: "Descarga las mejores apps de IPTV gratis para Android con instalación paso a paso y trucos de optimización.",
    category: "Android"
  },
  {
    slug: "iptv-m3u",
    title: "M3U IPTV: Guía Completa de Listas M3U",
    description: "Aprende qué son los archivos M3U, cómo crearlos, dónde descargar listas gratuitas y cómo usarlos en cualquier dispositivo.",
    category: "Guía Técnica"
  },
  {
    slug: "iptv-para-pc",
    title: "IPTV para PC: Guía para Windows y Mac",
    description: "Mejores programas gratuitos para ver IPTV en PC, instalación paso a paso y optimización de rendimiento.",
    category: "PC"
  },
  {
    slug: "iptv-stream-app",
    title: "IPTV Stream App: Mejores Aplicaciones de Streaming",
    description: "Guía completa de apps de streaming IPTV, comparativa de players e instalación para cualquier dispositivo.",
    category: "Apps"
  },
  {
    slug: "iptv-legal",
    title: "¿IPTV Es Legal? Alternativas Legales 2025",
    description: "Descubre la legalidad del IPTV, cómo identificar servicios legítimos y alternativas 100% legales y gratuitas.",
    category: "Legal"
  },
  {
    slug: "iptv-reddit",
    title: "IPTV Reddit: Las Mejores Comunidades, Guías y Qué Evitar en 2025",
    description: "Descubre las mejores comunidades de IPTV en Reddit, cómo navegar de forma segura y qué evitar para no caer en estafas.",
    category: "Comunidad"
  },
  {
    slug: "iptv-app-gratis",
    title: "IPTV App Gratis: Las 12 Mejores Aplicaciones Gratuitas para Ver TV 2025",
    description: "Descarga las mejores IPTV app gratis - comparativa completa de apps gratuitas para Android, iOS, Smart TV y PC.",
    category: "Apps"
  }
];

const Learn = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Centro de Aprendizaje</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Aprende Sobre <span className="text-gradient-primary">IPTV</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guías, tutoriales y consejos para sacar el máximo provecho de tu servicio IPTV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Link key={article.slug} to={`/aprende/${article.slug}`}>
                <Card className="p-6 hover:shadow-glow-primary transition-all duration-300 hover:scale-105 h-full">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {article.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
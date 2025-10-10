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
  },
  {
    slug: "iptv-extreme",
    title: "IPTV Extreme: Guía Completa de Configuración, Características y Trucos 2025",
    description: "Descubre todo sobre IPTV Extreme - guía completa de instalación, configuración avanzada, mejores características, solución de problemas y comparativa con otras apps IPTV en 2025.",
    category: "Apps Avanzadas"
  },
  {
    slug: "iptv-espana-2025",
    title: "IPTV España 2025: Guía Completa para Ver TV por Internet",
    description: "Descubre todo sobre IPTV en España 2025 - qué es, cómo funciona, mejores proveedores legales, instalación en Smart TV, precios y canales disponibles.",
    category: "Guía España"
  },
  {
    slug: "mejor-iptv-espana",
    title: "Mejor IPTV España: TOP 5 Proveedores Legales y Baratos 2025",
    description: "Descubre los 5 mejores proveedores IPTV en España 2025 - comparativa honesta de precios, canales, calidad y opiniones reales.",
    category: "Comparativas"
  },
  {
    slug: "iptv-legal-espana",
    title: "¿IPTV es Legal en España? La Verdad que Debes Saber",
    description: "Descubre la legalidad del IPTV en España, cómo identificar servicios legítimos y evitar problemas legales al contratar un servicio.",
    category: "Legal España"
  },
  {
    slug: "solucionar-buffering-iptv-stream",
    title: "Adiós al Buffering: Por qué se corta tu IPTV Stream app",
    description: "Descubre las 5 causas más comunes del buffering en IPTV y cómo solucionarlas rápidamente para disfrutar sin cortes.",
    category: "Soluciones"
  },
  {
    slug: "mejor-iptv-player-m3u",
    title: "El Mejor IPTV Player M3U: Comparativa de 4 Apps Imprescindibles",
    description: "Comparativa completa de los mejores reproductores IPTV - TiviMate, GSE Smart IPTV, VLC y IPTV Extreme. Gratis vs Pro.",
    category: "Apps"
  },
  {
    slug: "guia-m3u-iptv",
    title: "Guía Definitiva de M3U IPTV: Qué Es y Cómo Usarla",
    description: "Aprende qué es una lista M3U, cómo conseguirla, cargarla en tu dispositivo y usarla correctamente para ver IPTV.",
    category: "Guía Técnica"
  },
  {
    slug: "iptv-gratis-para-tv-espana",
    title: "IPTV gratis para TV: ¿La Opción Barata o la Peor Decisión?",
    description: "Descubre por qué el IPTV gratis para TV casi nunca funciona a largo plazo y cuál es la alternativa inteligente.",
    category: "Análisis"
  },
  {
    slug: "comparativa-iptv-players",
    title: "Comparativa: IPTV Smart Player vs IPTV app gratis vs Kodi",
    description: "Comparativa completa de reproductores IPTV para el usuario español - TiviMate, IPTV Extreme, GSE Smart IPTV y Kodi.",
    category: "Comparativas"
  },
  {
    slug: "iptv-para-pc-mac",
    title: "IPTV para PC y Mac: La Mejor Manera de Ver TV en tu Ordenador",
    description: "Guía completa para ver IPTV en PC y Mac - VLC, Kodi y reproductores web. Instalación paso a paso.",
    category: "PC"
  },
  {
    slug: "solucionar-problemas-iptv",
    title: "Solucionando Problemas: ¿Por qué mi IPTV Player M3U No Funciona?",
    description: "Guía completa de solución de problemas IPTV - conexión, lista M3U, dispositivo y proveedor. Soluciones rápidas.",
    category: "Soporte"
  },
  {
    slug: "iptv-reddit-opiniones",
    title: "IPTV Reddit: Lo que los Usuarios Reales Piensan Antes de Comprar",
    description: "Descubre las opiniones reales de usuarios en IPTV Reddit sobre estabilidad, reproductores y soporte técnico en España.",
    category: "Comunidad"
  },
  {
    slug: "iptv-gratis-vs-calidad",
    title: "De IPTV gratis Android a Calidad: ¿Merece la Pena la Inversión?",
    description: "Análisis completo del viaje del usuario desde IPTV gratis hasta servicios de calidad. Por qué la inversión mínima vale la pena.",
    category: "Análisis"
  },
  {
    slug: "instalar-iptv-smart-tv",
    title: "Cómo Instalar IPTV en 5 Minutos (Smart TV y Fire Stick)",
    description: "Guía paso a paso para instalar IPTV en Smart TV y Fire Stick en solo 5 minutos. Configuración sencilla y rápida.",
    category: "Tutorial"
  },
  {
    slug: "iptv-smart-player-vs-nativo",
    title: "IPTV Smart Player vs IPTV app nativa: ¿Cuál es mejor?",
    description: "Comparativa completa entre reproductores externos (Fire Stick) y apps nativas de Smart TV. Ventajas y desventajas.",
    category: "Comparativas"
  },
  {
    slug: "iptv-extreme-vs-tivimate",
    title: "IPTV Extreme vs TiviMate: Dos Gigantes de Android TV",
    description: "Comparativa detallada entre IPTV Extreme y TiviMate - características, ventajas y cuál elegir según tus necesidades.",
    category: "Comparativas"
  },
  {
    slug: "futbol-iptv-2025-espana",
    title: "Fútbol IPTV 2025 España: Todos los Partidos en Tu TV",
    description: "Guía completa fútbol IPTV España 2025 - cómo ver LaLiga, Champions League y todos los partidos con iptvespana.site desde €2.91/mes.",
    category: "Deportes"
  },
  {
    slug: "iptv-espana-servicio",
    title: "IPTV España: Ver Todos los Canales Españoles Desde €2.91/Mes",
    description: "Servicio IPTV España completo con 20,000+ canales, Netflix incluido. Instalación en 5 minutos en Fire TV, Smart TV y móvil.",
    category: "Servicios"
  },
  {
    slug: "mejor-iptv-espana-reddit",
    title: "Mejor IPTV España Reddit: Lo Que Realmente Funciona en 2025",
    description: "Análisis de opiniones Reddit sobre IPTV España. Por qué iptvespana.site es la mejor opción según usuarios reales.",
    category: "Comunidad"
  },
  {
    slug: "iptv-fire-stick-listas-m3u",
    title: "IPTV Fire TV Stick: Guía Completa con Listas M3U España 2025",
    description: "Cómo instalar IPTV en Fire TV Stick. Por qué iptvespana.site es mejor que listas M3U tradicionales. Guía paso a paso.",
    category: "Fire TV"
  },
  {
    slug: "listas-m3u-iptv-espana",
    title: "Listas M3U IPTV España 2025: Por Qué Xtream Codes es Superior",
    description: "Descubre por qué las listas M3U tienen limitaciones y cómo iptvespana.site con Xtream Codes ofrece una experiencia superior desde €2.91/mes.",
    category: "Guía Técnica"
  },
  {
    slug: "iptv-espana-fire-tv",
    title: "IPTV España Fire TV: La Combinación Perfecta para Ver Todo",
    description: "Fire TV Stick + iptvespana.site = La mejor experiencia IPTV. Guía completa de instalación y configuración en 12 minutos.",
    category: "Fire TV"
  },
  {
    slug: "mejor-iptv-futbol-espana",
    title: "Mejor IPTV para Fútbol España: Ver LaLiga y Champions Desde €2.91/Mes",
    description: "Guía completa para ver todo el fútbol con iptvespana.site - LaLiga, Champions, Premier y más. Ahorra 805€/año vs operadoras.",
    category: "Deportes"
  },
  {
    slug: "iptv-espana-reddit-opiniones",
    title: "IPTV España Reddit: Opiniones Reales y Por Qué IPTVEspana.site Destaca",
    description: "Análisis de opiniones Reddit sobre IPTV España. Descubre por qué iptvespana.site cumple todas las expectativas de usuarios reales.",
    category: "Comunidad"
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
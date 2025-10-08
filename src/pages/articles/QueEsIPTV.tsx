import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";

const QueEsIPTV = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Guía Básica
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Qué es IPTV y Cómo Funciona?
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre todo sobre IPTV, la tecnología que está revolucionando la forma de ver televisión.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p>
              IPTV (Internet Protocol Television) es una tecnología que permite transmitir contenido de televisión a través de internet en lugar de los métodos tradicionales como cable, satélite o antena terrestre.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">¿Cómo Funciona el IPTV?</h2>
            <p>
              A diferencia de la televisión tradicional que transmite señales por cable o ondas de radio, IPTV utiliza tu conexión a internet para enviar contenido directamente a tu dispositivo. El proceso es el siguiente:
            </p>

            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>El contenido se almacena en servidores</li>
              <li>Cuando seleccionas un canal o programa, el servidor lo envía a través de internet</li>
              <li>Tu dispositivo recibe y reproduce el contenido en tiempo real</li>
              <li>Puedes ver en múltiples dispositivos simultáneamente</li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Ventajas del IPTV</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Más canales:</strong> Acceso a miles de canales de todo el mundo</li>
              <li><strong>Mejor calidad:</strong> Transmisión en 4K, Full HD y HD</li>
              <li><strong>Flexibilidad:</strong> Ve en cualquier dispositivo con internet</li>
              <li><strong>Precio:</strong> Generalmente más económico que el cable tradicional</li>
              <li><strong>Contenido bajo demanda:</strong> Películas y series cuando quieras</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Tipos de IPTV</h2>
            <p>Existen tres tipos principales de servicios IPTV:</p>
            
            <h3 className="text-2xl font-bold mt-6 mb-3">1. IPTV en Vivo</h3>
            <p>Transmisión de canales de televisión en tiempo real, como deportes, noticias y programas de entretenimiento.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">2. Video bajo Demanda (VOD)</h3>
            <p>Acceso a una biblioteca de películas, series y documentales que puedes ver cuando quieras.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">3. Time-Shifted TV</h3>
            <p>Permite ver programas que ya se emitieron, similar a un DVR en la nube.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">¿Qué Necesitas para Usar IPTV?</h2>
            <p>Para disfrutar de IPTV necesitas:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Una conexión a internet estable (mínimo 10 Mbps para HD)</li>
              <li>Un dispositivo compatible (Smart TV, Fire Stick, Android Box, etc.)</li>
              <li>Una suscripción a un proveedor de IPTV confiable</li>
              <li>Una aplicación IPTV instalada en tu dispositivo</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">¿Es Legal el IPTV?</h2>
            <p>
              El IPTV en sí es completamente legal. Lo que determina la legalidad es si el proveedor tiene los derechos de transmisión del contenido. Es importante elegir proveedores legítimos que operen bajo las regulaciones aplicables.
            </p>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QueEsIPTV;
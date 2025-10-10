import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Link } from "react-router-dom";

const FutbolIPTV2025 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fútbol IPTV 2025 España: Todos los Partidos en Tu TV
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            ¿Buscas fútbol IPTV 2025 España para ver todos los partidos de LaLiga, Champions League y fútbol internacional? El IPTV es la solución moderna para disfrutar de todo el fútbol en tu Smart TV, móvil o Fire TV Stick sin complicaciones. Con el servicio adecuado puedes ver Real Madrid, Barcelona, Atlético Madrid y todos los equipos españoles, además de Premier League, Serie A, Bundesliga y todas las competiciones importantes en una sola plataforma.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">¿Qué es el Fútbol IPTV en España?</h2>
          
          <div className="p-6 rounded-lg border bg-card mb-8">
            <h3 className="text-xl font-semibold mb-3">Explicación Simple:</h3>
            <ul className="space-y-2">
              <li>✅ IPTV = Televisión por Internet</li>
              <li>✅ Ves todos los partidos de fútbol a través de WiFi</li>
              <li>✅ Funciona en cualquier dispositivo: Smart TV, móvil, tablet, Fire TV Stick</li>
              <li>✅ No necesitas antena parabólica ni cables</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Canales de Fútbol Disponibles con IPTV España</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">LaLiga EA Sports 2024-2025:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Movistar LaLiga (todos los partidos)</li>
                <li>LaLiga TV Bar</li>
                <li>DAZN LaLiga (5 partidos por jornada)</li>
                <li>GOL (1 partido gratis por semana)</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Champions League:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Movistar Liga de Campeones (8 canales)</li>
                <li>Todos los partidos en directo</li>
                <li>Fase de grupos y eliminatorias completas</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Fútbol Internacional:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Premier League (todos los partidos)</li>
                <li>Serie A italiana</li>
                <li>Bundesliga alemana</li>
                <li>Ligue 1 francesa</li>
                <li>Liga Portuguesa</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Otros Deportes:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>NBA, Euroliga de baloncesto</li>
                <li>Tenis: ATP, Grand Slams</li>
                <li>MotoGP, Fórmula 1</li>
                <li>UFC, boxeo</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">IPTVEspana.site - El Mejor Servicio IPTV para Fútbol en España</h2>
          
          <p className="mb-4">
            Después de probar decenas de servicios IPTV en España,{" "}
            <Link to="/" className="text-primary hover:underline font-semibold">
              iptvespana.site
            </Link>{" "}
            destaca por su relación calidad-precio imbatible y catálogo específico para usuarios españoles.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-6">Planes y Precios IPTVEspana.site</h3>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h4 className="text-lg font-semibold mb-3">Plan 1 Mes - €7/mes</h4>
              <p className="mb-3 text-sm text-muted-foreground">Perfecto para probar el servicio</p>
              <ul className="space-y-2">
                <li>✅ 20,000+ Canales en Vivo</li>
                <li>✅ 80,000+ Películas y Series</li>
                <li>✅ Netflix, Amazon Prime, Disney+ integrados</li>
                <li>✅ Calidad 4K/FHD/HD</li>
                <li>✅ Todos los Dispositivos</li>
                <li>✅ Soporte 24/7</li>
                <li>✅ Tecnología Anti-Congelamiento</li>
                <li>✅ Guía EPG Incluida</li>
                <li>✅ Ayuda de Instalación Gratis</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-lg font-semibold">Plan 6 Meses - €25</h4>
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  🔥 MÁS POPULAR
                </span>
              </div>
              <p className="mb-3 text-sm">
                <strong>Solo €4.16/mes</strong> - Ahorra 30% (€17 vs plan mensual)
              </p>
              <ul className="space-y-2">
                <li>✅ 20,000+ Canales en Vivo</li>
                <li>✅ 80,000+ Películas y Series</li>
                <li>✅ Netflix, Amazon Prime, Disney+ y Más</li>
                <li>✅ Calidad 4K/FHD/HD</li>
                <li>✅ Todos los Dispositivos</li>
                <li>✅ Soporte 24/7 en Español</li>
                <li>✅ Tecnología Anti-Congelamiento</li>
                <li>✅ Guía EPG Incluida</li>
                <li>✅ Ayuda de Instalación Gratis</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border-2 border-yellow-500 bg-yellow-500/5">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-lg font-semibold">Plan 12 Meses - €35/año</h4>
                <span className="px-3 py-1 rounded-full bg-yellow-500 text-black text-xs font-semibold">
                  💎 MEJOR VALOR
                </span>
              </div>
              <p className="mb-3 text-sm">
                <strong>Solo €2.91/mes</strong> - Ahorra 50% (€49 vs plan mensual)
              </p>
              <ul className="space-y-2">
                <li>✅ 20,000+ Canales en Vivo</li>
                <li>✅ 80,000+ Películas y Series</li>
                <li>✅ Netflix, Amazon Prime, Disney+, HBO y Más</li>
                <li>✅ Calidad 4K/FHD/HD</li>
                <li>✅ Funciona en Todos los Dispositivos</li>
                <li>✅ Soporte 24/7 en Español</li>
                <li>✅ Tecnología Anti-Congelamiento Premium</li>
                <li>✅ Guía EPG Completa</li>
                <li>✅ Ayuda de Instalación Personalizada Gratis</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">¿Por Qué IPTVEspana.site Supera a la Competencia?</h2>
          
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">1. Precio Imbatible 💰</h3>
              <p className="mb-3"><strong>Comparación Real:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Movistar Plus+ Fútbol: 30-50€/mes = 360-600€/año</li>
                <li>DAZN + Movistar: 40€/mes = 480€/año</li>
                <li className="text-primary font-semibold">IPTVEspana.site: 2.91€/mes = 35€/año</li>
              </ul>
              <p className="mt-3 font-semibold text-primary">Ahorras más de 500€ al año y tienes MÁS contenido.</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">2. Catálogo Más Completo 📺</h3>
              <p className="mb-3"><strong>IPTVEspana.site ofrece:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>20,000+ canales vs 100-200 de operadoras tradicionales</li>
                <li>TODO el fútbol mundial en una sola app</li>
                <li>Netflix, Prime Video, Disney+, HBO incluidos (valor 50€/mes aparte)</li>
                <li>80,000 películas y series on-demand</li>
                <li>Canales de 50+ países</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">3. Sin Permanencia ni Letra Pequeña ✅</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">IPTVEspana.site:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Cancela cuando quieras</li>
                    <li>Sin multas por cancelación</li>
                    <li>Sin instalador a casa</li>
                    <li>Activación instantánea</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Operadoras Tradicionales:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Permanencia 12-24 meses</li>
                    <li>Multa por cancelación: 50-200€</li>
                    <li>Técnico a casa obligatorio</li>
                    <li>Espera 7-15 días instalación</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">4. Tecnología Anti-Congelamiento 🚀</h3>
              <p className="mb-3"><strong>Solución IPTVEspana.site:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Servidores premium optimizados</li>
                <li>Tecnología anti-buffering avanzada</li>
                <li>Múltiples fuentes por canal (si una falla, cambia automático)</li>
                <li>CDN global para mínima latencia</li>
              </ul>
              <p className="mt-3 font-semibold text-primary">
                Resultado: Ves el partido fluido, sin interrupciones, incluso en 4K.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Cómo Ver Fútbol con IPTVEspana.site - Guía Paso a Paso</h2>
          
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 1: Contratar Servicio (2 minutos)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Ir a{" "}
                  <Link to="/" className="text-primary hover:underline font-semibold">
                    iptvespana.site
                  </Link>
                </li>
                <li>Elegir plan: 1 mes (€7), 6 meses (€25) ⭐, o 12 meses (€35)</li>
                <li>Click "Contratar" / "Suscribirse"</li>
                <li>Ingresar email</li>
                <li>Pagar con tarjeta de crédito/débito o PayPal</li>
                <li>Recibes email INSTANTÁNEO con credenciales</li>
              </ol>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 2: Instalar App IPTV (3 minutos)</h3>
              <p className="mb-3"><strong>En Fire TV Stick (Más Popular):</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Buscar "Downloader" en Fire TV</li>
                <li>Instalar app Downloader</li>
                <li>Abrir Downloader</li>
                <li>Escribir URL que te proporcionamos</li>
                <li>Descargar e instalar</li>
              </ol>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 3: Configurar App (2 minutos)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Abrir app IPTV instalada</li>
                <li>Seleccionar "Login with Xtream Codes API"</li>
                <li>Ingresar datos del email (Server URL, Username, Password)</li>
                <li>Click "Add User" o "Login"</li>
                <li>¡Listo! Aparecen todos los canales</li>
              </ol>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-8">
            <h3 className="text-xl font-semibold mb-3">¡No te pierdas el próximo partido!</h3>
            <p className="mb-4">
              Empieza ahora con{" "}
              <Link to="/" className="text-primary hover:underline font-semibold text-lg">
                iptvespana.site
              </Link>{" "}
              y disfruta de todo el fútbol en tu TV, móvil o tablet. Instalación en 5 minutos con ayuda gratis incluida.
            </p>
            <ul className="space-y-2">
              <li>✅ Desde €2.91/mes (plan anual)</li>
              <li>✅ Sin permanencia - Cancela cuando quieras</li>
              <li>✅ Activación instantánea</li>
              <li>✅ Soporte 24/7 en español</li>
            </ul>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FutbolIPTV2025;

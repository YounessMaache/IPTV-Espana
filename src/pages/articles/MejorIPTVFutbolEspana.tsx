import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Link } from "react-router-dom";

const MejorIPTVFutbolEspana = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mejor IPTV para Fútbol España: Ver LaLiga y Champions Desde €2.91/Mes
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Si eres fanático del fútbol en España, sabes que ver todos los partidos de LaLiga, Champions League y fútbol internacional puede costar una fortuna con operadoras tradicionales. Con{" "}
            <Link to="/" className="text-primary hover:underline font-semibold">
              iptvespana.site
            </Link>{" "}
            tienes acceso a TODO el fútbol por solo €2.91/mes (plan anual), sin cortes, en calidad 4K y con todos los canales deportivos españoles.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">El Problema del Fútbol en España</h2>
          
          <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20 mb-8">
            <h3 className="text-xl font-semibold mb-3">Costes Tradicionales:</h3>
            <ul className="space-y-3">
              <li>
                <strong>Movistar+ Fútbol:</strong> 30-50€/mes = 360-600€/año
                <p className="text-sm text-muted-foreground">Solo LaLiga y Champions</p>
              </li>
              <li>
                <strong>DAZN LaLiga:</strong> 40€/mes = 480€/año
                <p className="text-sm text-muted-foreground">5 partidos LaLiga por jornada</p>
              </li>
              <li>
                <strong>Movistar + DAZN:</strong> 70€/mes = 840€/año
                <p className="text-sm text-muted-foreground">Para ver todos los partidos</p>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-destructive text-lg">
              Total: Hasta 840€/año solo para ver fútbol
            </p>
          </div>

          <div className="p-6 rounded-lg border-2 border-primary bg-primary/5 mb-8">
            <h3 className="text-xl font-semibold mb-3">Solución IPTVEspana.site:</h3>
            <p className="mb-4">
              <strong className="text-3xl text-primary">€35/año</strong>
              <span className="ml-2 text-lg">(€2.91/mes)</span>
            </p>
            <ul className="space-y-2">
              <li>✅ TODOS los partidos de LaLiga</li>
              <li>✅ TODOS los partidos de Champions League</li>
              <li>✅ Premier League, Serie A, Bundesliga, Ligue 1</li>
              <li>✅ Copa del Rey, Europa League</li>
              <li>✅ Partidos de la Selección Española</li>
              <li>✅ MotoGP, F1, NBA, UFC</li>
              <li>✅ 20,000+ canales adicionales</li>
              <li>✅ 80,000+ películas y series</li>
            </ul>
            <p className="mt-4 font-semibold text-primary text-xl">
              Ahorras 805€ al año vs Movistar + DAZN
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Canales de Fútbol Incluidos</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">LaLiga EA Sports:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Movistar LaLiga:</strong> Todos los partidos</li>
                <li><strong>Movistar LaLiga 2-7:</strong> Multipantalla</li>
                <li><strong>LaLiga TV Bar:</strong> Canal oficial</li>
                <li><strong>DAZN LaLiga:</strong> 5 partidos/jornada</li>
                <li><strong>GOL:</strong> 1 partido gratis/semana</li>
              </ul>
              <p className="mt-3 font-semibold text-primary">
                Los 380 partidos de la temporada
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Champions League:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Movistar Liga de Campeones 1-8:</strong> Todos los partidos</li>
                <li><strong>Multipantalla:</strong> Ver varios partidos a la vez</li>
                <li><strong>Fase de grupos:</strong> Completa</li>
                <li><strong>Eliminatorias:</strong> Todas</li>
                <li><strong>Final:</strong> En directo</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Fútbol Internacional:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Premier League:</strong> Todos los partidos</li>
                <li><strong>Serie A:</strong> Calcio italiano completo</li>
                <li><strong>Bundesliga:</strong> Fútbol alemán</li>
                <li><strong>Ligue 1:</strong> Liga francesa</li>
                <li><strong>Liga Portuguesa:</strong> Benfica, Porto, Sporting</li>
                <li><strong>Eredivisie:</strong> Liga holandesa</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Otras Competiciones:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Copa del Rey:</strong> Todos los partidos</li>
                <li><strong>Europa League:</strong> Completa</li>
                <li><strong>Conference League:</strong> Todos los partidos</li>
                <li><strong>Selección Española:</strong> Todos los partidos</li>
                <li><strong>Copa América, Eurocopa:</strong> Cuando toque</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Por Qué IPTVEspana.site es el Mejor para Fútbol</h2>
          
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">1. Sin Buffering en Momentos Clave ⚽</h3>
              <p className="mb-3"><strong>El problema más común:</strong></p>
              <p className="mb-3 text-muted-foreground">
                "Estoy viendo el partido, va 1-1 minuto 89, mi equipo ataca... y se corta justo en el gol"
              </p>
              <p className="mb-3"><strong>Solución IPTVEspana.site:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tecnología Anti-Congelamiento Premium</li>
                <li>Servidores CDN globales</li>
                <li>Múltiples fuentes por canal (backup automático)</li>
                <li>Buffer inteligente adaptativo</li>
                <li>99.9% uptime en partidos importantes</li>
              </ul>
              <p className="mt-3 font-semibold text-primary">
                Resultado: Ves el gol en directo, sin cortes
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">2. Calidad 4K en Partidos Grandes 📺</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Partidos importantes en 4K Ultra HD</li>
                <li>Full HD (1080p) en todos los canales</li>
                <li>HD (720p) para conexiones más lentas</li>
                <li>Ajuste automático de calidad</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">3. EPG Completo (Guía de Programación) 📅</h3>
              <p className="mb-3">Sabes exactamente qué partido hay y cuándo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Horarios de todos los partidos</li>
                <li>Información de equipos</li>
                <li>Competición y jornada</li>
                <li>Recordatorios automáticos</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">4. Multipantalla para Ver Varios Partidos 🖥️</h3>
              <p className="mb-3">Sábado a las 16:00, 5 partidos simultáneos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ver hasta 4 partidos a la vez</li>
                <li>Cambiar entre canales instantáneamente</li>
                <li>Perfecto para jornadas completas</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">5. Compatible con Todos los Dispositivos 📱</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>En casa:</strong> Fire TV, Smart TV, TV Box</li>
                <li><strong>Fuera:</strong> Móvil, tablet</li>
                <li><strong>En el bar:</strong> Móvil con auriculares 😉</li>
                <li><strong>Viajando:</strong> Laptop, cualquier dispositivo</li>
              </ul>
              <p className="mt-3 font-semibold">
                Hasta 5 dispositivos simultáneos con una suscripción
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Planes IPTVEspana.site para Fútbol</h2>
          
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Plan 1 Mes - €7</h3>
              <p className="text-sm text-muted-foreground mb-3">Prueba para ver si te convence</p>
              <ul className="space-y-2">
                <li>✅ Todos los canales de fútbol</li>
                <li>✅ LaLiga completa</li>
                <li>✅ Champions League completa</li>
                <li>✅ Fútbol internacional</li>
                <li>✅ 20,000+ canales adicionales</li>
                <li>✅ Sin permanencia</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">Plan 6 Meses - €25</h3>
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  🔥 RECOMENDADO
                </span>
              </div>
              <p className="mb-3">
                <strong className="text-2xl text-primary">€4.16/mes</strong>
                <span className="ml-2">(Ahorra €17)</span>
              </p>
              <p className="mb-3 font-semibold">Cubre toda la temporada de fútbol</p>
              <ul className="space-y-2">
                <li>✅ Toda la temporada LaLiga 2024-2025</li>
                <li>✅ Champions League completa</li>
                <li>✅ Copa del Rey</li>
                <li>✅ Ahorro significativo</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border-2 border-yellow-500 bg-yellow-500/5">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">Plan 12 Meses - €35/año</h3>
                <span className="px-3 py-1 rounded-full bg-yellow-500 text-black text-xs font-semibold">
                  💎 MEJOR VALOR
                </span>
              </div>
              <p className="mb-3">
                <strong className="text-2xl text-primary">€2.91/mes</strong>
                <span className="ml-2">(Ahorra €49)</span>
              </p>
              <p className="mb-3 font-semibold">Menos de 3€ al mes - Precio imbatible</p>
              <ul className="space-y-2">
                <li>✅ Todo el año de fútbol</li>
                <li>✅ Todas las competiciones</li>
                <li>✅ Máximo ahorro</li>
                <li>✅ Mejor que cualquier operadora</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Comparativa: IPTVEspana.site vs Operadoras</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Característica</th>
                  <th className="text-left p-3">IPTVEspana.site</th>
                  <th className="text-left p-3">Movistar+</th>
                  <th className="text-left p-3">DAZN</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Precio/mes</td>
                  <td className="p-3 text-primary font-semibold">€2.91</td>
                  <td className="p-3">€50</td>
                  <td className="p-3">€40</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">LaLiga completa</td>
                  <td className="p-3 text-primary">✅ Sí</td>
                  <td className="p-3">✅ Sí</td>
                  <td className="p-3">⚠️ Solo 5/jornada</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Champions</td>
                  <td className="p-3 text-primary">✅ Todos</td>
                  <td className="p-3">✅ Todos</td>
                  <td className="p-3">❌ No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Premier League</td>
                  <td className="p-3 text-primary">✅ Todos</td>
                  <td className="p-3">❌ No</td>
                  <td className="p-3">✅ Algunos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Otros canales</td>
                  <td className="p-3 text-primary">20,000+</td>
                  <td className="p-3">~200</td>
                  <td className="p-3">Solo deportes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Permanencia</td>
                  <td className="p-3 text-primary">❌ No</td>
                  <td className="p-3">✅ 12 meses</td>
                  <td className="p-3">❌ No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dispositivos</td>
                  <td className="p-3 text-primary">5 simultáneos</td>
                  <td className="p-3">2</td>
                  <td className="p-3">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">No Te Pierdas Ningún Partido Esta Temporada</h3>
            <p className="mb-4">
              Con{" "}
              <Link to="/" className="text-primary hover:underline font-semibold text-lg">
                iptvespana.site
              </Link>{" "}
              tienes acceso a TODO el fútbol por menos de 3€ al mes.
            </p>
            <ul className="space-y-2 mb-4">
              <li>✅ LaLiga completa (380 partidos)</li>
              <li>✅ Champions League (todos los partidos)</li>
              <li>✅ Premier, Serie A, Bundesliga, Ligue 1</li>
              <li>✅ Sin buffering en momentos clave</li>
              <li>✅ Calidad 4K disponible</li>
              <li>✅ Soporte 24/7 en español</li>
              <li>✅ Sin permanencia - Cancela cuando quieras</li>
            </ul>
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Ver Fútbol Ahora →
            </Link>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MejorIPTVFutbolEspana;

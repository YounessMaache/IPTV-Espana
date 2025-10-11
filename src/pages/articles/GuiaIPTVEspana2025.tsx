import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Link } from "react-router-dom";

const GuiaIPTVEspana2025 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guía Definitiva de IPTV en España (2025): Todo lo que Necesitas Saber
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            ¿Sientes curiosidad por el IPTV y cómo funciona en España? Seguramente has oído el término, pero puede que
            tengas preguntas como "¿qué es IPTV?", "¿es legal?" y, sobre todo, "¿cómo empiezo a usarlo?". Esta guía
            resolverá todas tus dudas de una forma sencilla y directa.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Qué es IPTV y cómo funciona?</h2>
          <p className="mb-4">
            IPTV son las siglas de "Internet Protocol Television" o "Televisión por Protocolo de Internet". En pocas
            palabras, significa ver canales de televisión a través de tu conexión a internet en lugar de usar el
            satélite o el cable tradicional.
          </p>
          <p className="mb-4">
            En vez de recibir la señal por una antena parabólica o un cable coaxial, los canales se transmiten a tu
            dispositivo (como una Smart TV, un móvil o un decodificador) usando internet. De hecho, esta es la
            tecnología que usan muchas compañías oficiales, como <strong>IPTV Movistar</strong>, para ofrecer sus
            paquetes de televisión.
          </p>
          <p className="mb-8">
            Sin embargo, el término "IPTV" también se usa popularmente para describir servicios independientes que
            ofrecen acceso a una cantidad enorme de canales de todo el mundo.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Es legal el IPTV en España?</h2>
          <p className="mb-4">Esta es la pregunta más importante y la respuesta es clara: depende.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">IPTV Legal en España</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  Servicios de operadoras como Movistar, Vodafone u Orange son 100% legales. Pagas una suscripción
                  mensual y accedes a sus canales mediante apps o decodificador oficial.
                </li>
                <li>
                  Plataformas oficiales como <strong>DAZN</strong> para ver deportes también son legales.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="text-xl font-semibold mb-3">IPTV Ilegal</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  Proveedores externos que ofrecen miles de canales a precios muy bajos sin licencia operan en zona gris.
                </li>
                <li>
                  Usar estos servicios para ver contenido protegido sin permiso es ilegal. En España existen bloqueos por
                  parte de operadoras y se habla de posibles <strong>multas</strong>.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Cómo empezar a usar IPTV en España</h2>
          <p className="mb-4">Empezar es bastante fácil. Generalmente, solo necesitas tres cosas:</p>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">1) Un dispositivo compatible</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-semibold mb-2">Smart TV</p>
                  <p className="mb-2">
                    Televisores Samsung (Tizen), LG (webOS) o Android TV/Google TV permiten instalar apps de IPTV.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">TV Box Android</p>
                  <p className="mb-2">Xiaomi Mi Box, NVIDIA Shield y similares son muy populares.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Amazon Fire TV Stick</p>
                  <p className="mb-2">Convierte cualquier TV en Smart TV de forma económica y eficaz.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Ordenadores</p>
                  <p className="mb-2">Puedes ver IPTV en Windows o Mac con reproductores compatibles.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Móviles y Tablets</p>
                  <p className="mb-2">iPhone y Android cuentan con múltiples <strong>aplicaciones IPTV</strong>.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">2) Una aplicación de reproducción (IPTV Player)</h3>
              <p className="mb-2">
                Es el software que reproduce los canales; piensa en Netflix/YouTube, pero para TV en directo.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  <strong>IPTV Smarters Player</strong>, <strong>IPTV Extreme</strong> y <strong>TiviMate</strong> son de las más conocidas.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">3) Una lista IPTV</h3>
              <p className="mb-2">
                Es la "llave" que te da acceso a los canales. Normalmente es un archivo o enlace (lista M3U) que te
                proporciona un proveedor. Cárgala en tu app y aparecerán los canales listos para ver.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Qué buscar en un buen servicio de IPTV?</h2>
          <div className="p-6 rounded-lg border bg-card mb-8">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Calidad de los canales:</strong> Prioriza HD y 4K (UHD).
              </li>
              <li>
                <strong>Estabilidad:</strong> Sin cortes ni buffering; servidores potentes y bien mantenidos.
              </li>
              <li>
                <strong>Guía de Programación (EPG):</strong> Para saber qué se emite en cada momento.
              </li>
              <li>
                <strong>Soporte técnico:</strong> Atención rápida y eficaz (WhatsApp/Telegram).
              </li>
              <li>
                <strong>Prueba gratuita (IPTV Trial):</strong> Exige siempre una prueba (1–24h) antes de pagar.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-8">
            <p>
              Para usuarios que quieren una experiencia sencilla y estable, plataformas profesionales con soporte en
              español y compatibilidad con <strong>Xtream Codes</strong> y listas M3U suelen ser la opción más práctica.
              Puedes revisar servicios y tutoriales desde la página principal: {""}
              <Link to="/" className="text-primary font-semibold underline">iptvespana.site</Link>.
            </p>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaIPTVEspana2025;

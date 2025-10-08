import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Link } from "react-router-dom";

const InstalarIPTVSmartTV = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cómo Instalar IPTV gratis para TV en 5 Minutos (Smart TV y Fire Stick)
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Una de las mayores ventajas de la tecnología IPTV es su facilidad de instalación, especialmente en los dispositivos más populares en España, como las Smart TV con Android integrado y el Amazon Fire Stick. Olvídate de técnicos, cables extraños o antenas.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">La Televisión sin Antena: Instalación Sencilla</h2>
          
          <p className="mb-8">
            Aunque el título hace referencia a "IPTV gratis para TV", aquí vamos a cubrir el proceso de instalación de cualquier servicio, ya que el <em>método</em> es el mismo, pero el resultado (la estabilidad) depende de la calidad de tu lista M3U IPTV.
          </p>

          <p className="mb-8">
            Vamos a ver los pasos más sencillos para configurar tu televisión por Internet.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Paso 1: Elige y Prepara tu IPTV Smart Player</h2>
          
          <p className="mb-4">
            Antes de nada, necesitas la aplicación que va a leer tu lista de canales. En la mayoría de las Smart TV modernas y en el Fire Stick, se utiliza una aplicación de terceros.
          </p>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Para Fire Stick o Android TV:</h3>
              <p className="mb-3">
                La recomendación general es usar <strong>TiviMate</strong> (la opción de pago más profesional) o <strong>IPTV Extreme</strong> (una IPTV app gratis con versión Pro). Puedes descargarlas directamente desde la tienda de aplicaciones.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Para Smart TV (Samsung/LG):</h3>
              <p className="mb-3">
                Busca en la tienda de tu televisor el reproductor <strong>Smart IPTV</strong> o <strong>GSE Smart IPTV</strong>. Algunos de estos requieren un pago único muy pequeño para activarse.
              </p>
            </div>
          </div>

          <p className="font-semibold mb-8">Acción: Descarga e instala el reproductor en tu dispositivo.</p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Paso 2: Consigue tus Credenciales (La M3U IPTV o Xtream Codes)</h2>
          
          <p className="mb-4">
            Aquí es donde la calidad del servicio es clave. Un proveedor de calidad como el que puedes encontrar en IPTV España te dará los datos listos para copiar y pegar.
          </p>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Opción 1 (M3U URL):</h3>
              <p>Un enlace web que empieza por <code className="px-2 py-1 rounded bg-muted">http://...</code> y termina en <code className="px-2 py-1 rounded bg-muted">.m3u</code> o <code className="px-2 py-1 rounded bg-muted">.m3u8</code>.</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Opción 2 (Xtream Codes API):</h3>
              <p className="mb-3">Tres datos sencillos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>URL del Servidor</strong></li>
                <li><strong>Usuario</strong></li>
                <li><strong>Contraseña</strong></li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">Esta es la forma más fácil y recomendada para el usuario medio.</p>
            </div>
          </div>

          <p className="font-semibold mb-8">Acción: Ten estos datos a mano (escritos o copiados en el móvil) antes de abrir el reproductor.</p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Paso 3: Configuración Final en tu Dispositivo</h2>
          
          <p className="mb-4">
            Abre el IPTV Smart Player que descargaste en el Paso 1 y sigue estas instrucciones sencillas:
          </p>

          <div className="p-6 rounded-lg border bg-card mb-8">
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Añadir Lista de Canales:</strong> Busca el botón "Add Playlist", "Añadir Perfil" o similar.</li>
              <li><strong>Selecciona el Formato:</strong> Si tienes los tres datos (Xtream Codes), selecciona "Login with Xtream Codes" o "Add Xtream API". Si tienes la URL M3U, selecciona "Add M3U URL".</li>
              <li>
                <strong>Introduce los Datos:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Si usaste Xtream Codes, introduce la URL, tu usuario y tu contraseña en los campos correspondientes.</li>
                  <li>Si usaste la URL M3U, pégala en el campo URL.</li>
                </ul>
              </li>
              <li><strong>Nombrar la Lista:</strong> Ponle un nombre fácil de recordar, como "Mi TV" o "Canales España".</li>
              <li><strong>Cargar:</strong> El reproductor tardará unos segundos en descargar y organizar todos los canales y la EPG (Guía de Programación).</li>
            </ol>
          </div>

          <p className="text-lg font-semibold mb-8">¡Listo! Ya deberías ver todos tus canales ordenados en tu televisor.</p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Un Consejo para Evitar el Fracaso</h2>
          
          <p className="mb-4">
            Recuerda: la instalación es sencilla, pero la calidad de la experiencia no es gratuita. Si intentas usar listas de IPTV gratis Android que se encuentran en búsquedas rápidas, la instalación será la misma, pero el resultado serán cortes constantes.
          </p>

          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-8">
            <p className="mb-4">
              La inversión en un servicio estable y con buen soporte en español te garantiza que, después de estos 5 minutos de instalación, no tendrás que volver a preocuparte por el buffering.
            </p>
            <p>
              Si valoras la calidad, la estabilidad y quieres evitar problemas legales o técnicos, especialmente para configurarlo en tu Smart TV o Fire Stick, sitios como{" "}
              <Link to="/" className="text-primary hover:underline font-semibold text-lg">
                https://www.iptvespana.site/
              </Link>{" "}
              te ofrecen ese punto de partida sólido.
            </p>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default InstalarIPTVSmartTV;

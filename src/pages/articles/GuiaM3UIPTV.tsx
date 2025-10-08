import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Link } from "react-router-dom";

const GuiaM3UIPTV = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guía Definitiva de M3U IPTV: Qué Es, Cómo Conseguirla y Usarla Correctamente
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Si eres nuevo en el mundo de la televisión por Internet, el término M3U IPTV puede sonarte a jerga técnica incomprensible. Pero la realidad es que es un concepto muy sencillo: la lista M3U es, simplemente, <strong>el mapa de tus canales</strong>.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Desmontando el Misterio de la Lista M3U</h2>
          
          <p className="mb-8">
            Imagina que tienes un lector de libros electrónicos (tu IPTV Smart Player). La lista M3U es el "índice" que le dice al lector dónde encontrar cada libro (cada canal) en Internet. Sin este mapa, el reproductor no sabría dónde buscar la señal.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">¿Cómo se Ve una Lista M3U?</h2>
          
          <div className="p-6 rounded-lg border bg-card mb-8">
            <p className="mb-4">
              Técnicamente, una lista M3U es un simple archivo de texto que termina en <code className="px-2 py-1 rounded bg-muted">.m3u</code> o <code className="px-2 py-1 rounded bg-muted">.m3u8</code>, o a veces una URL (un enlace web).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contenido:</strong> Dentro del archivo, verás la dirección web (URL) de cada canal de televisión, organizada por categorías.</li>
              <li><strong>Diferencia clave:</strong> En la actualidad, la forma más cómoda de cargar una lista ya no es el archivo .m3u, sino usando el formato <strong>"Xtream Codes API"</strong>. Muchos proveedores te dan un usuario, una contraseña y una URL de servidor. Esto es mucho más fácil de introducir en tu IPTV Player M3U.</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">3 Formas de Conseguir y Cargar tu M3U en tu Dispositivo</h2>
          
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="text-xl font-semibold mb-3">1. Evita las Listas Públicas y de IPTV Gratis Android</h3>
              <p className="mb-4">
                Hay muchas listas M3U IPTV "públicas" en Internet. La mayoría son de baja calidad, duran pocas horas o días, y se cortan constantemente (por el famoso buffering). <strong>No son fiables.</strong>
              </p>
              <p className="font-semibold">
                La lista M3U IPTV de calidad <strong>siempre</strong> viene de un proveedor de pago con servidores potentes.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">2. La Opción del Archivo (.m3u)</h3>
              <p className="mb-4">Si tu proveedor te da un archivo que debes descargar:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Descarga el archivo a un pendrive o a tu móvil.</li>
                <li>Conecta el pendrive a tu Smart TV o TV Box.</li>
                <li>Abre tu IPTV Player M3U (como GSE Smart IPTV o IPTV Extreme).</li>
                <li>Busca la opción "Añadir Lista" y selecciona "Cargar desde archivo local".</li>
              </ol>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">3. La Opción de la URL (Xtream Codes API) - La Más Fácil</h3>
              <p className="mb-4">Esta es la forma preferida por los usuarios de IPTV Stream app en España por su simplicidad:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Tu proveedor te envía 3 datos: <strong>URL del Servidor</strong>, <strong>Nombre de Usuario</strong> y <strong>Contraseña</strong>.</li>
                <li>En tu IPTV Smart Player (por ejemplo, TiviMate), busca la opción "Añadir Playlist" o "Añadir Perfil".</li>
                <li>Selecciona la opción "Login with Xtream Codes" o "API Xtream".</li>
                <li>Introduce los 3 datos. ¡Listo! El reproductor descarga toda la lista y el EPG automáticamente.</li>
              </ol>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Un Buen Mantenimiento para una Buena Experiencia</h2>
          
          <div className="p-6 rounded-lg border bg-card mb-8">
            <p className="mb-4">Una lista M3U IPTV de calidad te garantiza que:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tienes los canales ordenados por categorías (Deportes, Cine, Documentales, TDT España, etc.).</li>
              <li>Los canales tienen buena resolución (Full HD o 4K).</li>
              <li>Los canales están activos y no se caen cada semana.</li>
            </ul>
          </div>

          <p className="mb-4">
            El rendimiento de tu televisión por Internet depende un 50% de tu Internet y un 50% de la calidad de esa lista M3U. Nunca subestimes la importancia de pagar por un proveedor serio.
          </p>

          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-8">
            <p>
              Si estás listo para empezar con una M3U IPTV que te garantice estabilidad y un soporte técnico que te guíe en la configuración inicial, sitios como{" "}
              <Link to="/" className="text-primary hover:underline font-semibold text-lg">
                https://www.iptvespana.site/
              </Link>{" "}
              ofrecen listas optimizadas para el público español y compatibles con cualquier IPTV Player M3U. ¡Olvídate de buscar listas piratas que duran dos días y apuesta por la calidad!
            </p>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaM3UIPTV;

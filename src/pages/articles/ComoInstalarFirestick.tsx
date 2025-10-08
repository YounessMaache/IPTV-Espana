import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";

const ComoInstalarFirestick = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Tutorial
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cómo Instalar IPTV en Fire TV Stick
            </h1>
            <p className="text-xl text-muted-foreground">
              Guía paso a paso para configurar IPTV en tu Amazon Fire TV Stick en minutos.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p>
              Instalar IPTV en tu Amazon Fire TV Stick es un proceso sencillo que te permitirá acceder a miles de canales y contenido bajo demanda. Sigue esta guía completa para configurar tu servicio en menos de 10 minutos.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Requisitos Previos</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Amazon Fire TV Stick (cualquier generación)</li>
              <li>Conexión a internet estable</li>
              <li>Cuenta de Amazon activa</li>
              <li>Suscripción activa a un servicio IPTV</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Paso 1: Preparar tu Fire TV Stick</h2>
            <p>Antes de instalar cualquier aplicación, necesitas habilitar la opción de aplicaciones de terceros:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Ve a <strong>Configuración</strong> en el menú principal</li>
              <li>Selecciona <strong>Mi Fire TV</strong></li>
              <li>Haz clic en <strong>Opciones para desarrolladores</strong></li>
              <li>Activa <strong>Aplicaciones de origen desconocido</strong></li>
              <li>Confirma cuando aparezca el mensaje de advertencia</li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Paso 2: Instalar Downloader</h2>
            <p>Downloader es una aplicación que te permite descargar archivos en tu Fire TV Stick:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Abre la <strong>Amazon Appstore</strong></li>
              <li>Busca "Downloader"</li>
              <li>Instala la aplicación</li>
              <li>Ábrela cuando termine la instalación</li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Paso 3: Descargar la Aplicación IPTV</h2>
            <p>Las aplicaciones más populares para IPTV son IPTV Smarters Pro, TiviMate o Perfect Player:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Abre Downloader</li>
              <li>En la barra de URL, ingresa la dirección de descarga de la app</li>
              <li>Espera a que se descargue el archivo APK</li>
              <li>Haz clic en <strong>Instalar</strong></li>
              <li>Una vez instalada, haz clic en <strong>Listo</strong></li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Paso 4: Configurar la Aplicación IPTV</h2>
            <p>Después de contactarnos, recibirás tus credenciales de acceso. Para configurar la aplicación:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Abre la aplicación IPTV instalada</li>
              <li>Selecciona <strong>Agregar nueva lista</strong> o <strong>Login</strong></li>
              <li>Introduce los datos que te proporcionamos:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>URL del servidor o M3U</li>
                  <li>Usuario</li>
                  <li>Contraseña</li>
                </ul>
              </li>
              <li>Haz clic en <strong>Agregar</strong> o <strong>Login</strong></li>
              <li>Espera a que cargue la lista de canales</li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Consejos Importantes</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Velocidad de Internet:</strong> Asegúrate de tener al menos 10 Mbps para HD y 25 Mbps para 4K</li>
              <li><strong>Actualiza regularmente:</strong> Mantén tu aplicación IPTV actualizada para mejor rendimiento</li>
              <li><strong>Usa Ethernet si es posible:</strong> Una conexión por cable es más estable que WiFi</li>
              <li><strong>Reinicia ocasionalmente:</strong> Reiniciar tu Fire Stick puede resolver problemas menores</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Solución de Problemas</h2>
            <h3 className="text-2xl font-bold mt-6 mb-3">La aplicación no se instala</h3>
            <p>Asegúrate de haber habilitado "Aplicaciones de origen desconocido" en la configuración.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Los canales no cargan</h3>
            <p>Verifica tu conexión a internet y que hayas introducido correctamente las credenciales.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">El video se detiene o congela</h3>
            <p>Esto suele deberse a una conexión lenta. Prueba acercándote al router o usando Ethernet.</p>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ComoInstalarFirestick;
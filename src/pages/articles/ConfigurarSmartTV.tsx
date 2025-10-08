import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";

const ConfigurarSmartTV = () => {
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
              Configurar IPTV en Smart TV
            </h1>
            <p className="text-xl text-muted-foreground">
              Aprende a configurar IPTV en Samsung, LG, Sony y otras Smart TVs fácilmente.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p>
              Configurar IPTV en tu Smart TV es más sencillo de lo que parece. Dependiendo de la marca de tu televisor, el proceso puede variar ligeramente, pero los conceptos básicos son los mismos.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Métodos de Configuración</h2>
            <p>Existen dos métodos principales para ver IPTV en tu Smart TV:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Aplicación nativa:</strong> Instalando una app IPTV desde la tienda de aplicaciones</li>
              <li><strong>Dispositivo externo:</strong> Usando un Fire Stick, Android Box o similar</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Configuración en Samsung Smart TV</h2>
            <p>Para televisores Samsung con Tizen OS:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Enciende tu Smart TV Samsung</li>
              <li>Presiona el botón <strong>Smart Hub</strong> en tu control remoto</li>
              <li>Ve a <strong>Apps</strong></li>
              <li>Busca "IPTV Smarters" o "Smart IPTV"</li>
              <li>Descarga e instala la aplicación</li>
              <li>Abre la app e introduce tus credenciales IPTV</li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Configuración en LG Smart TV</h2>
            <p>Para televisores LG con webOS:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Presiona el botón <strong>Home</strong> en tu control</li>
              <li>Abre <strong>LG Content Store</strong></li>
              <li>Busca aplicaciones IPTV como "SS IPTV" o "IPTV Smarters"</li>
              <li>Instala la aplicación de tu preferencia</li>
              <li>Configura con las credenciales proporcionadas</li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Configuración en Android TV (Sony, Philips, TCL)</h2>
            <p>Para Smart TVs con sistema Android TV:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Ve a <strong>Google Play Store</strong></li>
              <li>Busca "IPTV Smarters Pro" o "TiviMate"</li>
              <li>Instala la aplicación</li>
              <li>Abre la app</li>
              <li>Selecciona <strong>Add New User</strong> o <strong>Login</strong></li>
              <li>Introduce:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Nombre de la lista (cualquier nombre)</li>
                  <li>URL del servidor</li>
                  <li>Usuario y contraseña</li>
                </ul>
              </li>
              <li>Haz clic en <strong>Add User</strong></li>
            </ol>

            <h2 className="text-3xl font-bold mt-8 mb-4">Usando un Dispositivo Externo</h2>
            <p>Si tu Smart TV no tiene aplicaciones IPTV disponibles o prefieres más opciones, puedes usar:</p>
            
            <h3 className="text-2xl font-bold mt-6 mb-3">Amazon Fire TV Stick</h3>
            <p>La opción más popular y económica. Conecta el Fire Stick al puerto HDMI de tu TV y sigue nuestra guía de instalación para Fire Stick.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Android TV Box</h3>
            <p>Ofrece más potencia y opciones de personalización. Perfecto para usuarios avanzados.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Apple TV</h3>
            <p>Para usuarios del ecosistema Apple. Descarga aplicaciones IPTV desde la App Store.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Configuración de Credenciales</h2>
            <p>Una vez instalada tu aplicación IPTV, necesitarás:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>URL del servidor:</strong> La dirección del servidor IPTV</li>
              <li><strong>Usuario:</strong> Tu nombre de usuario único</li>
              <li><strong>Contraseña:</strong> Tu contraseña de acceso</li>
              <li><strong>Puerto:</strong> Generalmente es 8080 o 80</li>
            </ul>
            <p className="mt-4">Todos estos datos te los proporcionaremos después de tu suscripción.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Optimizar la Experiencia</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Conexión por cable:</strong> Usa Ethernet en lugar de WiFi para mejor estabilidad</li>
              <li><strong>Calidad de video:</strong> Ajusta la calidad según tu velocidad de internet</li>
              <li><strong>Actualizaciones:</strong> Mantén tu Smart TV y apps actualizadas</li>
              <li><strong>EPG (Guía Electrónica):</strong> Configura la guía de programación para saber qué se transmite</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Solución de Problemas Comunes</h2>
            
            <h3 className="text-2xl font-bold mt-6 mb-3">No encuentro la app en la tienda</h3>
            <p>Algunas Smart TVs tienen tiendas limitadas. En ese caso, usa un dispositivo externo como Fire Stick.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">La imagen se congela</h3>
            <p>Verifica tu velocidad de internet. Necesitas al menos 10 Mbps para HD.</p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Error de autenticación</h3>
            <p>Verifica que hayas introducido correctamente las credenciales. Revisa mayúsculas y espacios.</p>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ConfigurarSmartTV;
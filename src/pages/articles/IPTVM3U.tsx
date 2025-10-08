import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { FileText, Code, Download, Settings, CheckCircle, AlertTriangle } from "lucide-react";

const IPTVM3U = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              M3U IPTV: La Guía Definitiva de Listas M3U y Cómo Usarlas
            </h1>
            <p className="text-xl text-muted-foreground">
              M3U IPTV es el formato de archivo más utilizado para organizar y reproducir canales de televisión por internet, y entender cómo funciona te abrirá las puertas a miles de canales gratuitos en cualquier dispositivo. Un archivo M3U es simplemente una lista de texto que contiene URLs de streams de video, pero su poder radica en su compatibilidad universal: funciona en Smart TVs, Android, iOS, Windows, Mac, y prácticamente cualquier reproductor IPTV.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-8 h-8 text-primary" />
                ¿Qué es M3U y Por Qué es el Estándar de IPTV?
              </h2>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="mb-4">
                  <strong>M3U</strong> significa "Multimedia Playlist" y es un formato de archivo de texto que contiene información sobre archivos multimedia y sus ubicaciones. Fue creado originalmente para Winamp en 1998, pero hoy es el estándar universal para listas IPTV.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">M3U vs M3U8</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>M3U:</strong> Extensión original</li>
                      <li><strong>M3U8:</strong> Versión UTF-8 (soporta caracteres especiales)</li>
                      <li>Ambos funcionan igual en IPTV</li>
                      <li>M3U8 preferido para canales internacionales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Por Qué es Universal</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Formato de texto simple</li>
                      <li>✓ Compatible con todos los players</li>
                      <li>✓ Fácil de crear y editar</li>
                      <li>✓ Pequeño tamaño de archivo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-8 h-8 text-primary" />
                Anatomía de un Archivo M3U: Cómo Funciona Por Dentro
              </h2>
              
              <div className="bg-card border rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Ejemplo de M3U Básico:</h3>
                <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
{`#EXTM3U
#EXTINF:-1,Canal Ejemplo
http://example.com/stream.m3u8

#EXTINF:-1 tvg-id="canal2" tvg-logo="http://logo.png" group-title="Deportes",ESPN
http://stream.example.com/espn.m3u8`}
                </pre>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <h4 className="font-semibold mb-2">#EXTM3U</h4>
                  <p className="text-sm text-muted-foreground">
                    Primera línea obligatoria que indica que es un archivo M3U extendido. Sin esta línea, algunos players no lo reconocerán.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h4 className="font-semibold mb-2">#EXTINF</h4>
                  <p className="text-sm text-muted-foreground">
                    Tag de información del canal. El <code>-1</code> significa duración desconocida (normal en streaming en vivo).
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h4 className="font-semibold mb-2">Metadata Importante</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li><code>tvg-id</code>: ID para sincronizar con EPG</li>
                    <li><code>tvg-logo</code>: URL del logo del canal</li>
                    <li><code>tvg-name</code>: Nombre alternativo del canal</li>
                    <li><code>group-title</code>: Categoría (Deportes, Películas, etc.)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Download className="w-8 h-8 text-primary" />
                Tipos de Archivos M3U para IPTV
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-3">M3U Local</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Archivo descargado en tu dispositivo
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-green-600">✓ Ventajas:</strong></p>
                    <ul className="ml-4 space-y-1 text-muted-foreground">
                      <li>• Funciona offline</li>
                      <li>• Carga rápida</li>
                      <li>• Sin dependencia de servidor</li>
                    </ul>
                    <p><strong className="text-red-600">✗ Desventajas:</strong></p>
                    <ul className="ml-4 space-y-1 text-muted-foreground">
                      <li>• No se actualiza automáticamente</li>
                      <li>• Ocupa espacio</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-3">M3U URL (Remote)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Link directo a archivo M3U en internet
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-green-600">✓ Ventajas:</strong></p>
                    <ul className="ml-4 space-y-1 text-muted-foreground">
                      <li>• Actualización automática</li>
                      <li>• No ocupa espacio</li>
                      <li>• Siempre última versión</li>
                    </ul>
                    <p><strong className="text-red-600">✗ Desventajas:</strong></p>
                    <ul className="ml-4 space-y-1 text-muted-foreground">
                      <li>• Requiere conexión constante</li>
                      <li>• Depende de servidor externo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-3">M3U con EPG</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Incluye guía de programación integrada
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-green-600">✓ Ventajas:</strong></p>
                    <ul className="ml-4 space-y-1 text-muted-foreground">
                      <li>• Guía TV completa</li>
                      <li>• Catch-up TV posible</li>
                      <li>• Mejor experiencia</li>
                    </ul>
                    <p><strong>Tags:</strong></p>
                    <ul className="ml-4 space-y-1 text-muted-foreground">
                      <li>• tvg-url</li>
                      <li>• catchup</li>
                      <li>• catchup-source</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Dónde Conseguir Listas M3U Gratis y Legales (2025)</h2>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Fuentes 100% Legales
                </h3>
                <div className="space-y-3">
                  <div className="bg-card/50 rounded p-4">
                    <h4 className="font-semibold mb-1">Pluto TV M3U</h4>
                    <p className="text-sm text-muted-foreground">300+ canales gratuitos con publicidad. Totalmente legal.</p>
                  </div>
                  <div className="bg-card/50 rounded p-4">
                    <h4 className="font-semibold mb-1">Samsung TV Plus M3U</h4>
                    <p className="text-sm text-muted-foreground">Canales gratuitos extraíbles de Samsung TVs.</p>
                  </div>
                  <div className="bg-card/50 rounded p-4">
                    <h4 className="font-semibold mb-1">Plex Live TV</h4>
                    <p className="text-sm text-muted-foreground">Canales gratuitos disponibles en formato compatible.</p>
                  </div>
                  <div className="bg-card/50 rounded p-4">
                    <h4 className="font-semibold mb-1">IPTV-org GitHub</h4>
                    <p className="text-sm text-muted-foreground">Proyecto open source con listas públicas legales de todo el mundo.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Advertencia Legal
                </h3>
                <p className="text-sm mb-3">
                  <strong>Cómo identificar listas ilegales (pirata):</strong>
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li>🚩 Incluyen canales premium (HBO, ESPN+, etc.) "gratis"</li>
                  <li>🚩 Prometen "10,000 canales por $10/mes"</li>
                  <li>🚩 Vendidas en grupos Telegram/WhatsApp anónimos</li>
                  <li>🚩 Sin información de empresa o proveedor legítimo</li>
                </ul>
                <p className="text-sm mt-3 font-semibold">
                  Riesgos: Multas legales, ISP throttling, malware en URLs, robo de datos personales.
                </p>
              </div>
            </section>

            <ArticleCTA />

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Settings className="w-8 h-8 text-primary" />
                Crear Tu Propio Archivo M3U Personalizado
              </h2>

              <div className="bg-card border rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Método Manual (Editor de Texto)</h3>
                <ol className="list-decimal list-inside space-y-2 ml-2 text-sm mb-4">
                  <li>Abre Notepad (Windows) o TextEdit (Mac)</li>
                  <li>Escribe <code>#EXTM3U</code> en la primera línea</li>
                  <li>Añade canales con formato: <code>#EXTINF:-1,Nombre Canal</code></li>
                  <li>En la siguiente línea: URL del stream</li>
                  <li>Repite para cada canal</li>
                  <li>Guarda como: <code>milista.m3u</code> (importante la extensión)</li>
                  <li>Usa encoding UTF-8</li>
                </ol>

                <div className="bg-muted p-4 rounded">
                  <p className="text-xs font-semibold mb-2">Ejemplo Completo:</p>
                  <pre className="text-xs overflow-x-auto">
{`#EXTM3U
#EXTINF:-1 tvg-id="espn" tvg-logo="http://logo.com/espn.png" group-title="Deportes",ESPN HD
http://stream.example.com/espn.m3u8
#EXTINF:-1 tvg-id="hbo" tvg-logo="http://logo.com/hbo.png" group-title="Películas",HBO
http://stream.example.com/hbo.m3u8`}
                  </pre>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border rounded-lg p-5">
                  <h4 className="font-semibold mb-3">Herramientas Online</h4>
                  <ul className="text-sm space-y-2">
                    <li>• M3U Playlist Creator - Interface gráfica</li>
                    <li>• M3U Editor Online - Edición en navegador</li>
                    <li>• IPTV Editor App - Para móviles</li>
                  </ul>
                </div>
                <div className="bg-card border rounded-lg p-5">
                  <h4 className="font-semibold mb-3">Consejos Importantes</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ Siempre usar UTF-8 encoding</li>
                    <li>✓ Incluir metadata completa para EPG</li>
                    <li>✓ Agrupar por categorías con group-title</li>
                    <li>✓ URLs de logos en alta resolución</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Cómo Cargar M3U en Diferentes Dispositivos</h2>
              
              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">Android (IPTV Smarters Pro)</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Instalar app desde Google Play</li>
                    <li>Abrir → Seleccionar "Add M3U URL/File"</li>
                    <li>Si es URL: pegar URL y dar nombre</li>
                    <li>Si es archivo: seleccionar de almacenamiento</li>
                    <li>Esperar carga de canales (1-5 minutos)</li>
                    <li>Configurar EPG URL si disponible</li>
                  </ol>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">Smart TV Samsung/LG</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Instalar Smart IPTV app</li>
                    <li>Anotar código MAC que aparece en pantalla</li>
                    <li>Ir a siptv.eu desde navegador</li>
                    <li>Ingresar código MAC</li>
                    <li>Subir archivo M3U o ingresar URL</li>
                    <li>Reiniciar app en TV</li>
                  </ol>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">Windows/Mac (VLC)</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Abrir VLC Media Player</li>
                    <li>Media → Open Network Stream (Ctrl+N)</li>
                    <li>Pegar URL M3U o Browse para archivo local</li>
                    <li>Play → Ver → Playlist para lista completa</li>
                  </ol>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">iOS/iPhone/iPad (GSE Smart IPTV)</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Descargar GSE Smart IPTV de App Store</li>
                    <li>Tap "+" para añadir playlist</li>
                    <li>Seleccionar "Remote Playlist" (URL) o "Local" (archivo)</li>
                    <li>Ingresar detalles y guardar</li>
                    <li>Canales aparecerán automáticamente</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
              
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Son legales todos los archivos M3U?</h3>
                  <p className="text-muted-foreground text-sm">
                    El formato M3U es 100% legal. La legalidad depende del CONTENIDO que enlaza. Listas con canales de libre acceso son legales. Listas con contenido pirata (canales premium robados) son ilegales.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Puedo crear mi propio M3U con URLs de YouTube?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sí, técnicamente puedes crear M3U con streams de YouTube en vivo. Sin embargo, YouTube cambia URLs frecuentemente, así que los links no serán permanentes.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Qué diferencia hay entre M3U y M3U8?</h3>
                  <p className="text-muted-foreground text-sm">
                    M3U8 es la versión UTF-8 del formato M3U. Soporta mejor caracteres especiales e internacionales. En IPTV funcionan idénticamente, pero M3U8 es preferido.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Caduca un archivo M3U?</h3>
                  <p className="text-muted-foreground text-sm">
                    El archivo en sí no caduca, pero las URLs de streams dentro pueden dejar de funcionar. Por eso M3U URLs remotas son mejores (se actualizan automáticamente).
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Cuántos canales puede tener un M3U?</h3>
                  <p className="text-muted-foreground text-sm">
                    Técnicamente ilimitado. Archivos M3U son texto simple y pueden tener miles de entradas. Sin embargo, listas muy grandes (10,000+ canales) pueden cargar lento en algunos players.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Puedo editar M3U con Word o Notepad?</h3>
                  <p className="text-muted-foreground text-sm">
                    Notepad: SÍ (recomendado). Word: NO (añade formato oculto que rompe el archivo). Usa editores de texto plano: Notepad, Notepad++, TextEdit (en modo plain text), o editores online especializados.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8">
              <h2 className="text-3xl font-bold mb-4">Conclusión</h2>
              <p className="text-lg mb-4">
                Dominar el formato M3U te da control total sobre tu experiencia IPTV. Ya sea creando listas personalizadas, organizando tus canales favoritos, o simplemente entendiendo cómo funcionan las listas que usas, este conocimiento es fundamental para cualquier usuario de IPTV en 2025.
              </p>
              <p className="text-lg">
                Para listas M3U profesionales optimizadas con EPG completa, logos en HD, y actualización automática de canales, explora nuestros planes premium IPTV con soporte técnico 24/7.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IPTVM3U;

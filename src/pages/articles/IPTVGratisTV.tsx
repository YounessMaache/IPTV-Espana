import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Tv, Wifi, Shield, Download, Settings, CheckCircle } from "lucide-react";

const IPTVGratisTV = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              IPTV Gratis para TV: Cómo Configurar Televisión por Internet Sin Costo
            </h1>
            <p className="text-xl text-muted-foreground">
              Si estás buscando IPTV gratis para TV, has llegado al lugar correcto. IPTV (Internet Protocol Television) te permite ver canales de televisión a través de tu conexión a internet sin necesidad de antenas satelitales o cables costosos. En esta guía completa, te enseñaremos cómo configurar IPTV gratis en tu Smart TV, Android TV Box, y otros dispositivos, junto con las mejores aplicaciones gratuitas y listas M3U actualizadas para 2025.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Tv className="w-8 h-8 text-primary" />
                ¿Qué es IPTV y Por Qué es Popular?
              </h2>
              <p>
                IPTV significa "Televisión por Protocolo de Internet" y es una tecnología que transmite contenido televisivo a través de redes IP, a diferencia de los formatos tradicionales como señales terrestres, satélite o cable. La popularidad del IPTV se debe a su flexibilidad, menor costo y la capacidad de ver contenido desde cualquier dispositivo conectado a internet.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold mb-3">Ventajas del IPTV sobre Cable/Satélite:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Acceso a miles de canales internacionales sin límites geográficos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Menor costo mensual comparado con paquetes de cable tradicional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Compatibilidad con múltiples dispositivos simultáneamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Funciones avanzadas como pausa en vivo y grabación DVR</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Wifi className="w-8 h-8 text-primary" />
                Requisitos para Ver IPTV Gratis en tu TV
              </h2>
              <p>
                Antes de comenzar, asegúrate de cumplir con estos requisitos básicos para una experiencia óptima:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">Velocidad de Internet</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• SD (480p): 5-10 Mbps</li>
                    <li>• HD (720p): 10-15 Mbps</li>
                    <li>• Full HD (1080p): 15-25 Mbps</li>
                    <li>• 4K UHD: 25-50 Mbps</li>
                  </ul>
                </div>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">Dispositivos Compatibles</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Smart TV (Samsung, LG, Sony)</li>
                    <li>• Android TV / Google TV</li>
                    <li>• Amazon Fire TV Stick</li>
                    <li>• Apple TV</li>
                    <li>• Android TV Box</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Download className="w-8 h-8 text-primary" />
                Las 7 Mejores Apps de IPTV Gratis para TV en 2025
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">1. IPTV Smarters Pro</h3>
                  <p className="text-muted-foreground mb-3">
                    La aplicación más popular y completa. Soporta múltiples listas M3U, EPG integrada, control parental y reproducción multipantalla.
                  </p>
                  <p className="text-sm"><strong>Plataformas:</strong> Android, iOS, Windows, macOS, Smart TV</p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">2. GSE Smart IPTV</h3>
                  <p className="text-muted-foreground mb-3">
                    Excelente para usuarios de Apple. Interfaz intuitiva con soporte completo para EPG y sincronización en la nube.
                  </p>
                  <p className="text-sm"><strong>Ideal para:</strong> iOS, Apple TV, iPad</p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">3. TiviMate</h3>
                  <p className="text-muted-foreground mb-3">
                    Interfaz estilo cable tradicional. La versión gratuita es suficiente para uso básico, con opción premium a $5.99/año.
                  </p>
                  <p className="text-sm"><strong>Destacado:</strong> Función de grabación y múltiples listas</p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">4. Smart IPTV</h3>
                  <p className="text-muted-foreground mb-3">
                    Especializado para Smart TVs Samsung y LG. Costo único de €5.49 con 7 días de prueba gratis.
                  </p>
                  <p className="text-sm"><strong>Ventajas:</strong> Sin publicidad, carga rápida de listas grandes</p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">5. OTT Navigator</h3>
                  <p className="text-muted-foreground mb-3">
                    Interfaz moderna estilo Netflix con EPG detallada y sistema de favoritos inteligente.
                  </p>
                  <p className="text-sm"><strong>Compatible:</strong> Códigos Xtream y listas M3U</p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">6. Perfect Player</h3>
                  <p className="text-muted-foreground mb-3">
                    Aplicación ultra-ligera ideal para dispositivos antiguos. Altamente personalizable con soporte de plugins.
                  </p>
                  <p className="text-sm"><strong>Peso:</strong> Solo 10MB - Perfecto para Android TV boxes básicos</p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">7. Kodi + PVR IPTV Simple Client</h3>
                  <p className="text-muted-foreground mb-3">
                    Centro multimedia completo para usuarios avanzados. Infinidad de addons y personalización total.
                  </p>
                  <p className="text-sm"><strong>Nota:</strong> Mayor curva de aprendizaje pero máxima potencia</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Settings className="w-8 h-8 text-primary" />
                Cómo Instalar IPTV Gratis en Smart TV
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Método 1: Desde la Tienda de Aplicaciones</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Abre la tienda de aplicaciones de tu Smart TV (Samsung Apps, LG Content Store, etc.)</li>
                    <li>Busca "IPTV" o el nombre específico de la app (ej: "Smart IPTV")</li>
                    <li>Selecciona la aplicación y presiona "Instalar"</li>
                    <li>Abre la app una vez instalada</li>
                    <li>Anota el código o URL que aparece en pantalla</li>
                    <li>Desde un navegador, ve al sitio web de la app e ingresa el código</li>
                    <li>Sube tu lista M3U o ingresa la URL de tu servicio IPTV</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Método 2: Instalación mediante USB (para apps no disponibles)</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Descarga el archivo APK de la aplicación IPTV en tu PC</li>
                    <li>Copia el APK a una memoria USB</li>
                    <li>Conecta el USB a tu Smart TV</li>
                    <li>Abre el explorador de archivos en tu TV</li>
                    <li>Navega hasta el APK y selecciona "Instalar"</li>
                    <li>Activa "Fuentes desconocidas" en Configuración si te lo pide</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Método 3: Screen Mirroring desde Smartphone</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Instala la app IPTV en tu smartphone Android o iOS</li>
                    <li>Asegúrate de que tu TV y teléfono están en la misma red WiFi</li>
                    <li>Activa Screen Mirroring/Smart View en tu TV</li>
                    <li>Desde tu teléfono, selecciona "Transmitir" o "Screen Mirroring"</li>
                    <li>Selecciona tu TV de la lista de dispositivos</li>
                    <li>Abre la app IPTV en tu teléfono y verás el contenido en tu TV</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                Aspectos Legales del IPTV Gratis
              </h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold mb-3 text-yellow-600 dark:text-yellow-400">Importante: Legalidad y Seguridad</h3>
                <p className="mb-4">
                  No todo el IPTV gratis es legal. Es crucial diferenciar entre servicios legales y aquellos que distribuyen contenido con derechos de autor sin permiso.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1">✓ Servicios IPTV Legales (100% Gratis):</h4>
                    <ul className="ml-6 space-y-1 text-sm">
                      <li>• Pluto TV - 300+ canales con publicidad</li>
                      <li>• Samsung TV Plus - Canales gratuitos integrados</li>
                      <li>• Plex Live TV - Streaming legal gratuito</li>
                      <li>• Tubi TV - Películas y series gratis</li>
                      <li>• Xumo TV - Canales en vivo gratuitos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1">✗ Riesgos de Servicios Pirata:</h4>
                    <ul className="ml-6 space-y-1 text-sm">
                      <li>• Multas legales por consumo de contenido ilegal</li>
                      <li>• Exposición a malware y virus</li>
                      <li>• Robo de datos personales y bancarios</li>
                      <li>• Servicio inestable que se cae constantemente</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                <strong>Recomendación:</strong> Utiliza únicamente servicios IPTV legales y verifica que el proveedor tenga licencias para transmitir el contenido. Si pagas por un servicio, asegúrate de que sea un proveedor legítimo con soporte oficial.
              </p>
            </section>

            <ArticleCTA />

            <section>
              <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes (FAQ)</h2>
              
              <div className="space-y-6">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">¿El IPTV gratis es legal?</h3>
                  <p className="text-muted-foreground">
                    Depende del servicio. IPTV como tecnología es totalmente legal. Sin embargo, usar servicios que transmiten contenido con derechos de autor sin licencia es ilegal. Servicios como Pluto TV, Samsung TV Plus y Plex son completamente legales porque tienen acuerdos de licencia.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Necesito VPN para IPTV gratis?</h3>
                  <p className="text-muted-foreground">
                    Para servicios legales no es necesario. Sin embargo, una VPN puede mejorar tu privacidad online y evitar restricciones geográficas. Si usas servicios de legalidad dudosa, una VPN es altamente recomendada (aunque no elimina la ilegalidad).
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Cuál es la mejor app de IPTV gratis para Smart TV?</h3>
                  <p className="text-muted-foreground">
                    Para Samsung y LG: Smart IPTV (€5.49 único pago, 7 días gratis). Para Android TV: IPTV Smarters Pro o TiviMate (versión gratuita). Para Apple TV: GSE Smart IPTV (100% gratis).
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Por qué mi IPTV hace buffering constantemente?</h3>
                  <p className="text-muted-foreground">
                    Causas comunes: conexión a internet lenta, servidor IPTV sobrecargado, WiFi débil, app mal configurada. Soluciones: usa cable ethernet en vez de WiFi, cierra otras apps, aumenta el buffer en configuración, cambia a un servidor menos congestionado.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Puedo ver IPTV gratis sin Android TV Box?</h3>
                  <p className="text-muted-foreground">
                    Sí. Si tienes una Smart TV moderna (2018+), probablemente tiene apps IPTV disponibles directamente en su tienda. También puedes usar Amazon Fire TV Stick (€39), Chromecast con Google TV (€69), o simplemente transmitir desde tu smartphone a la TV.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8">
              <h2 className="text-3xl font-bold mb-4">Conclusión</h2>
              <p className="text-lg mb-4">
                El IPTV gratis es una realidad accesible en 2025, pero es fundamental diferenciar entre servicios legales y aquellos que infringen derechos de autor. Con las aplicaciones correctas, una buena conexión a internet, y servicios legítimos como Pluto TV o Plex, puedes disfrutar de miles de canales sin costo.
              </p>
              <p className="text-lg">
                Para una experiencia premium con soporte 24/7, más de 20,000 canales en calidad 4K, películas, series y deportes en vivo, considera nuestros planes IPTV profesionales con garantía de uptime y legalidad completa.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IPTVGratisTV;

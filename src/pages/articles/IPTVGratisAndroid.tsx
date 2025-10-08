import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Smartphone, Download, Settings, Zap, Shield, Star } from "lucide-react";

const IPTVGratisAndroid = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              IPTV Gratis Android: Las Mejores Aplicaciones y Cómo Configurarlas
            </h1>
            <p className="text-xl text-muted-foreground">
              Si buscas IPTV gratis Android, estás en el lugar indicado para transformar tu smartphone, tablet o Android TV Box en un centro de entretenimiento completo sin gastar un centavo. Android es la plataforma más versátil para IPTV gracias a su ecosistema abierto que permite instalar infinidad de aplicaciones gratuitas, cargar listas M3U personalizadas, y disfrutar de miles de canales de televisión en vivo desde cualquier lugar.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Smartphone className="w-8 h-8 text-primary" />
                Por Qué Android es la Mejor Plataforma para IPTV Gratis
              </h2>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Ventajas de Android para IPTV:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Sistema Abierto:</strong> Permite instalar apps fuera de Google Play (sideload APKs)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Compatibilidad Universal:</strong> Soporta M3U, XSPF, Xtream Codes y más formatos
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Variedad de Dispositivos:</strong> Desde smartphones hasta Android TV boxes dedicados
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Apps Gratuitas Potentes:</strong> Más opciones gratis que iOS o sistemas cerrados
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-card border rounded-lg p-5">
                  <h4 className="font-semibold mb-2">Android TV vs Android Móvil</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Android TV:</strong> Interfaz optimizada para pantalla grande (10-foot UI), mejor para uso en TV<br/>
                    <strong>Android Móvil:</strong> Interfaz táctil, portabilidad, ideal para ver en movimiento
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-5">
                  <h4 className="font-semibold mb-2">Requisitos Mínimos</h4>
                  <p className="text-sm text-muted-foreground">
                    • Android 5.0+ (recomendado 7.0+)<br/>
                    • 2GB RAM mínimo<br/>
                    • 10-25 Mbps internet<br/>
                    • 100MB espacio libre
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Download className="w-8 h-8 text-primary" />
                Top 10 Apps de IPTV Gratis para Android (2025)
              </h2>

              <div className="space-y-6">
                {[
                  {
                    name: "1. IPTV Smarters Pro",
                    badge: "Más Popular",
                    description: "La aplicación más descargada. Compatible con M3U y Xtream Codes.",
                    features: ["EPG completo", "Control parental", "Multi-pantalla", "Interfaz moderna"],
                    download: "Google Play Store",
                    size: "25MB",
                    rating: "⭐⭐⭐⭐⭐"
                  },
                  {
                    name: "2. TiviMate IPTV Player",
                    badge: "Mejor Interfaz",
                    description: "Solo Android TV y Fire TV. UI estilo cable tradicional profesional.",
                    features: ["EPG perfecta", "Grabación (Premium)", "Catch-up TV", "Hasta 5 listas (Premium)"],
                    download: "Google Play (Android TV)",
                    size: "18MB",
                    rating: "⭐⭐⭐⭐⭐"
                  },
                  {
                    name: "3. GSE Smart IPTV",
                    badge: "Más Completo",
                    description: "100% gratis con todas las funciones. Sin publicidad.",
                    features: ["Soporte EPG automático", "Descarga offline", "Múltiples listas", "Reproductor robusto"],
                    download: "Google Play Store",
                    size: "32MB",
                    rating: "⭐⭐⭐⭐½"
                  },
                  {
                    name: "4. Perfect Player IPTV",
                    badge: "Más Ligero",
                    description: "Solo 10MB. Ideal para dispositivos antiguos (Android 4.4+).",
                    features: ["Ultra ligero", "Altamente personalizable", "Plugins disponibles", "Skins customizables"],
                    download: "Google Play Store",
                    size: "10MB",
                    rating: "⭐⭐⭐⭐"
                  },
                  {
                    name: "5. OTT Navigator IPTV",
                    badge: "Mejor Diseño",
                    description: "Interfaz tipo Netflix con artwork en EPG.",
                    features: ["UI moderna", "EPG con posters", "Sistema de watchlist", "Xtream Codes"],
                    download: "Google Play Store",
                    size: "22MB",
                    rating: "⭐⭐⭐⭐½"
                  }
                ].map((app, idx) => (
                  <div key={idx} className={idx === 0 ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 rounded-xl p-6 shadow-lg" : "bg-card border rounded-xl p-6"}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold">{app.name}</h3>
                      {app.badge && (
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                          {app.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{app.description}</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
                      <div>
                        <p className="font-semibold">Características:</p>
                        <ul className="text-muted-foreground space-y-1">
                          {app.features.map((f, i) => <li key={i}>• {f}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Descarga: <span className="font-normal text-muted-foreground">{app.download}</span></p>
                        <p className="font-semibold">Tamaño: <span className="font-normal text-muted-foreground">{app.size}</span></p>
                        <p className="font-semibold">Rating: <span className="font-normal">{app.rating}</span></p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="text-lg font-bold mb-2">6-10. Menciones Honorables</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Lazy IPTV:</strong> Minimalista y simple, perfecto para principiantes</li>
                    <li><strong>IPTV Extreme Pro:</strong> Funciones avanzadas, soporte UDP proxy</li>
                    <li><strong>Kodi + PVR IPTV Simple Client:</strong> Para usuarios avanzados, máxima potencia</li>
                    <li><strong>VLC for Android:</strong> Reproduce cualquier formato, backup confiable</li>
                    <li><strong>Free IPTV Player:</strong> Con canales incluidos, no siempre requiere M3U</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Settings className="w-8 h-8 text-primary" />
                Cómo Instalar Apps de IPTV en Android (3 Métodos)
              </h2>

              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Método 1: Desde Google Play Store (Recomendado)</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Abre Google Play Store en tu dispositivo Android</li>
                    <li>Busca "IPTV Smarters Pro" (o el nombre de la app que quieras)</li>
                    <li>Verifica que sea del desarrollador oficial</li>
                    <li>Presiona "Instalar" y espera la descarga</li>
                    <li>Abre la app una vez instalada</li>
                  </ol>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <strong>Ventaja:</strong> Actualizaciones automáticas y verificación de seguridad por Google
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Método 2: Instalación de APK (Sideload)</h3>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4 mb-4">
                    <p className="text-sm"><strong>⚠️ Precaución:</strong> Solo descarga APKs de fuentes confiables como APKMirror o APKPure</p>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Ve a Configuración → Seguridad → Habilitar "Fuentes desconocidas" o "Instalar apps desconocidas"</li>
                    <li>Descarga el APK desde sitio confiable (APKMirror.com, APKPure.com)</li>
                    <li>Abre el archivo APK descargado</li>
                    <li>Acepta permisos y presiona "Instalar"</li>
                    <li>Una vez instalada, puedes desactivar "Fuentes desconocidas"</li>
                  </ol>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Método 3: Para Android TV Box</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Instala "Downloader" o "File Commander" desde Play Store</li>
                    <li>Abre Downloader y ve a Settings → habilita JavaScript</li>
                    <li>En la barra de URL, ingresa: <code className="bg-muted px-2 py-1 rounded text-xs">apkmirror.com</code></li>
                    <li>Busca la app IPTV que deseas</li>
                    <li>Descarga e instala usando el control remoto</li>
                  </ol>
                </div>
              </div>
            </section>

            <ArticleCTA />

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-8 h-8 text-primary" />
                Optimización para Android: Evitar Buffering
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">Configuración de Red</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Usa WiFi 5GHz en vez de 2.4GHz</li>
                    <li>✓ Coloca router cerca del dispositivo</li>
                    <li>✓ Cierra otras apps que consuman ancho de banda</li>
                    <li>✓ Desactiva descargas en segundo plano</li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">Ajustes en la App</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Buffer: 3-5 segundos (Settings → Player)</li>
                    <li>✓ Reproductor: ExoPlayer (mejor para Android)</li>
                    <li>✓ Decodificación: Hardware (HW+)</li>
                    <li>✓ Limpia caché cada 2 semanas</li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">Optimización del Sistema</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Cierra apps en segundo plano</li>
                    <li>✓ Libera espacio de almacenamiento</li>
                    <li>✓ Reinicia dispositivo periódicamente</li>
                    <li>✓ Actualiza Android a última versión</li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3">Calidad vs Velocidad</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• SD (480p): 5-10 Mbps</li>
                    <li>• HD (720p): 10-15 Mbps</li>
                    <li>• Full HD (1080p): 15-25 Mbps</li>
                    <li>• 4K: 25-50 Mbps</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                Aspectos Legales y Seguridad en Android
              </h2>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-yellow-600 dark:text-yellow-400">Importante: Seguridad y Legalidad</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Riesgo de Apps Pirata con Malware</h4>
                    <p className="text-sm text-muted-foreground">
                      Apps no oficiales pueden contener malware, spyware o robar tus datos. Descarga solo de Google Play o sitios verificados.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Permisos Sospechosos a Evitar</h4>
                    <p className="text-sm text-muted-foreground">
                      Si una app IPTV pide acceso a: contactos, SMS, micrófono, cámara (sin razón) → RED FLAG. Desinstala inmediatamente.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Por Qué Necesitas VPN en Android</h4>
                    <p className="text-sm text-muted-foreground">
                      Una VPN encripta tu tráfico, oculta tu IP, y te protege de tu ISP. Especialmente importante si usas servicios IPTV de legalidad dudosa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Mejores VPNs Gratuitas para Android</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>ProtonVPN:</strong> Ilimitado gratis, sin logs, alta seguridad</li>
                  <li><strong>Windscribe:</strong> 10GB/mes gratis, buena velocidad</li>
                  <li><strong>Hide.me:</strong> 10GB/mes, sin anuncios</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">
                  <strong>Nota:</strong> VPNs gratis tienen limitaciones de velocidad. Para streaming 4K considera VPN premium.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
              
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Es seguro instalar apps de IPTV gratis en Android?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sí, si descargas de Google Play Store o sitios confiables como APKMirror/APKPure. Verifica siempre permisos antes de instalar. Evita APKs de sitios desconocidos.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Funcionan las apps de IPTV sin internet móvil?</h3>
                  <p className="text-muted-foreground text-sm">
                    No. IPTV requiere conexión a internet activa (WiFi o datos móviles) para transmitir video en vivo. Sin internet, las apps no funcionarán.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Puedo grabar programas de IPTV en Android?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sí. Apps como TiviMate (versión premium $5.99/año) permiten grabar programas. También Kodi con add-ons de PVR permite grabación.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Las apps IPTV consumen mucha batería?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sí, streaming de video consume batería significativamente. Para ver en smartphone, usa modo ahorro de energía y reduce brillo. Mejor conectar a cargador.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Necesito root para IPTV en Android?</h3>
                  <p className="text-muted-foreground text-sm">
                    No. Todas las apps IPTV funcionan perfectamente sin root. Root solo necesario para modificaciones avanzadas del sistema (no recomendado).
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-5">
                  <h3 className="font-semibold mb-2">¿Qué velocidad de internet necesito?</h3>
                  <p className="text-muted-foreground text-sm">
                    Mínimo 10 Mbps para HD. Recomendado: 25 Mbps para Full HD sin buffering. Para 4K necesitas 50+ Mbps. Usa test de velocidad: Fast.com
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8">
              <h2 className="text-3xl font-bold mb-4">Conclusión</h2>
              <p className="text-lg mb-4">
                Android es la plataforma definitiva para IPTV gratis gracias a su flexibilidad, variedad de apps gratuitas de alta calidad, y compatibilidad universal. Con apps como IPTV Smarters Pro, TiviMate, y GSE Smart IPTV, puedes disfrutar de miles de canales sin gastar un centavo.
              </p>
              <p className="text-lg">
                Para la experiencia IPTV más premium con listas optimizadas, servidores dedicados, soporte 24/7 y garantía de legalidad, explora nuestros planes profesionales compatibles con todas estas aplicaciones Android.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IPTVGratisAndroid;

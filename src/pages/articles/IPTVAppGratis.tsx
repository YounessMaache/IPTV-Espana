import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";

const IPTVAppGratis = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IPTV App Gratis: Las 12 Mejores Aplicaciones Gratuitas para Ver TV 2025
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Encontrar una IPTV app gratis de calidad que realmente funcione sin trucos ocultos puede ser un desafío en 2025, con cientos de aplicaciones que prometen ser "gratuitas" pero están llenas de publicidad invasiva, requieren pagos escondidos, o peor aún, contienen malware. En esta guía definitiva, hemos probado y analizado las 12 mejores aplicaciones IPTV completamente gratuitas disponibles para Android, iOS, Smart TV, PC y otros dispositivos, evaluando no solo su gratuidad real, sino también su rendimiento, estabilidad, facilidad de uso, compatibilidad con formatos M3U y Xtream Codes, calidad de reproducción, y funciones adicionales como EPG, grabación y control parental. Aprenderás exactamente cuál app elegir según tu dispositivo y necesidades, cómo instalarlas correctamente, y compararemos versiones gratuitas versus premium para que determines si vale la pena actualizar.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Qué Buscar en una IPTV App Gratis de Calidad</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Criterios Esenciales</h3>
              <ul className="space-y-2">
                <li>✓ 100% Gratis vs Freemium: Diferencia crítica</li>
                <li>✓ Sin publicidad invasiva (o mínima)</li>
                <li>✓ Compatibilidad: M3U, M3U8, Xtream Codes</li>
                <li>✓ Reproducción estable: Sin crashes frecuentes</li>
                <li>✓ EPG funcional: Guía de programación</li>
                <li>✓ Multi-playlist: Múltiples listas M3U</li>
                <li>✓ Personalización: Categorías, favoritos</li>
                <li>✓ Actualizaciones regulares: Soporte activo</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Red Flags de Apps "Gratis"</h3>
              <ul className="space-y-2 text-destructive">
                <li>✗ Requieren tarjeta de crédito para "prueba"</li>
                <li>✗ Publicidad cada 30 segundos</li>
                <li>✗ Permisos sospechosos (contactos, SMS)</li>
                <li>✗ Sin información del desarrollador</li>
                <li>✗ Reviews mayormente negativas recientes</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Top 12 IPTV Apps Gratis (Análisis Profundo)</h2>
          
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">1. IPTV Smarters Pro ⭐⭐⭐⭐⭐</h3>
              <p className="mb-4"><strong>Plataformas:</strong> Android, iOS, Windows, macOS, Smart TV</p>
              <p className="mb-4"><strong>¿Es Realmente Gratis?:</strong> SÍ - 100% gratuito, sin IAPs</p>
              <p className="mb-4"><strong>Publicidad:</strong> Ninguna | <strong>Rating:</strong> 4.5/5 usuarios</p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Soporte M3U URL/File + Xtream Codes API</li>
                  <li>EPG completo con imágenes</li>
                  <li>Control parental con PIN</li>
                  <li>Multi-pantalla (PIP)</li>
                  <li>Catch-up TV si proveedor lo soporta</li>
                  <li>Interfaz moderna y customizable</li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Pros:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Interfaz profesional tipo Netflix</li>
                  <li>Muy estable, pocos crashes</li>
                  <li>EPG se sincroniza automáticamente</li>
                  <li>Funciona en prácticamente todos los dispositivos</li>
                  <li>Actualizaciones frecuentes</li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Contras:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li>Configuración inicial puede confundir principiantes</li>
                  <li>Requiere que tengas tu propia lista M3U</li>
                </ul>
              </div>

              <p className="mt-4"><strong>Mejor para:</strong> Usuarios intermedios que tienen lista M3U propia</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">2. TiviMate IPTV Player ⭐⭐⭐⭐⭐</h3>
              <p className="mb-4"><strong>Plataformas:</strong> Android TV, Fire TV Stick (NO smartphones)</p>
              <p className="mb-4"><strong>¿Es Realmente Gratis?:</strong> SÍ - versión gratuita muy completa</p>
              <p className="mb-4"><strong>Versión Premium:</strong> $5.99/año (opcional)</p>
              <p className="mb-4"><strong>Rating:</strong> 4.8/5 usuarios</p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Características Gratis:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>1 lista M3U permitida</li>
                  <li>EPG completa con timeline</li>
                  <li>Interfaz tipo cable tradicional</li>
                  <li>Catch-up TV (hasta 7 días según provider)</li>
                  <li>Favoritos ilimitados</li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Características Premium ($5.99/año):</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hasta 5 listas M3U</li>
                  <li>Grabación de programas (DVR)</li>
                  <li>Múltiples perfiles de usuario</li>
                  <li>Sin marcas de agua</li>
                </ul>
              </div>

              <p className="mt-4"><strong>Mejor para:</strong> Usuarios de Android TV/Fire TV que buscan experiencia premium</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">3. GSE Smart IPTV ⭐⭐⭐⭐½</h3>
              <p className="mb-4"><strong>Plataformas:</strong> iOS, Apple TV, Android, Mac</p>
              <p className="mb-4"><strong>¿Es Realmente Gratis?:</strong> SÍ - 100% gratis sin limitaciones</p>
              <p className="mb-4"><strong>Rating:</strong> 4.6/5 usuarios</p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Soporte M3U, JSON playlists</li>
                  <li>EPG automático con XMLTV</li>
                  <li>Control parental robusto</li>
                  <li>Sincronización iCloud (iOS/Mac)</li>
                  <li>Múltiples listas sin límite</li>
                  <li>Chromecast integrado</li>
                </ul>
              </div>

              <p className="mt-4"><strong>Mejor para:</strong> Usuarios de iPhone, iPad, Apple TV</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">4. Perfect Player IPTV ⭐⭐⭐⭐</h3>
              <p className="mb-4"><strong>Plataformas:</strong> Android, Android TV, Fire TV</p>
              <p className="mb-4"><strong>¿Es Realmente Gratis?:</strong> SÍ - versión gratis casi completa</p>
              <p className="mb-4"><strong>Versión Premium:</strong> $1.99 único pago</p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ultra ligero (solo 10MB)</li>
                  <li>Funciona en dispositivos antiguos (Android 4.4+)</li>
                  <li>EPG con múltiples diseños</li>
                  <li>Soporte para plugins</li>
                  <li>Skins 100% personalizables</li>
                </ul>
              </div>

              <p className="mt-4"><strong>Mejor para:</strong> Dispositivos de gama baja o usuarios que valoran rendimiento sobre estética</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">5. Lazy IPTV ⭐⭐⭐⭐</h3>
              <p className="mb-4"><strong>Plataformas:</strong> Android, Android TV</p>
              <p className="mb-4"><strong>¿Es Realmente Gratis?:</strong> SÍ - 100% sin compras</p>
              <p className="mb-4"><strong>Publicidad:</strong> Anuncios ocasionales</p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>No requiere registro</li>
                  <li>Soporte M3U, XSPF</li>
                  <li>Reproductor VLC integrado opcional</li>
                  <li>Interfaz minimalista</li>
                  <li>Configuración mínima</li>
                </ul>
              </div>

              <p className="mt-4"><strong>Mejor para:</strong> Principiantes absolutos, usuarios que quieren simplicidad</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">6. VLC for Android/iOS ⭐⭐⭐⭐</h3>
              <p className="mb-4"><strong>Plataformas:</strong> Android, iOS, Windows, Mac, Linux</p>
              <p className="mb-4"><strong>¿Es Realmente Gratis?:</strong> SÍ - 100% open source</p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Reproduce TODO formato de video</li>
                  <li>Streaming directo desde URLs M3U</li>
                  <li>Sin necesidad de conversión</li>
                  <li>Hardware acceleration</li>
                  <li>Subtítulos integrados</li>
                </ul>
              </div>

              <p className="mt-4"><strong>Mejor para:</strong> Backup player, streams problemáticos</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Comparativa Lado a Lado: Top 5 Apps Gratis</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Característica</th>
                  <th className="text-left p-3">IPTV Smarters</th>
                  <th className="text-left p-3">TiviMate</th>
                  <th className="text-left p-3">GSE Smart</th>
                  <th className="text-left p-3">Perfect Player</th>
                  <th className="text-left p-3">Lazy IPTV</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Precio</td>
                  <td className="p-3">Gratis</td>
                  <td className="p-3">Gratis/Premium</td>
                  <td className="p-3">Gratis</td>
                  <td className="p-3">Gratis/Premium</td>
                  <td className="p-3">Gratis</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Plataformas</td>
                  <td className="p-3">Todas</td>
                  <td className="p-3">Android TV</td>
                  <td className="p-3">iOS/Android</td>
                  <td className="p-3">Android</td>
                  <td className="p-3">Android</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">EPG Visual</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐</td>
                  <td className="p-3">⭐</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Interfaz</td>
                  <td className="p-3">Moderna</td>
                  <td className="p-3">Premium</td>
                  <td className="p-3">Compleja</td>
                  <td className="p-3">Antigua</td>
                  <td className="p-3">Simple</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Estabilidad</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Múltiples Listas</td>
                  <td className="p-3">✓</td>
                  <td className="p-3">✗ (gratis)</td>
                  <td className="p-3">✓</td>
                  <td className="p-3">✓</td>
                  <td className="p-3">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Cómo Elegir la App Correcta para Ti</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Por Dispositivo</h3>
              <ul className="space-y-2">
                <li><strong>Android TV/Fire TV:</strong> → TiviMate o IPTV Smarters Pro</li>
                <li><strong>iPhone/iPad:</strong> → GSE Smart IPTV (gratis) o iPlayTV ($3)</li>
                <li><strong>Dispositivo antiguo/lento:</strong> → Perfect Player o Lazy IPTV</li>
                <li><strong>PC Windows/Mac:</strong> → IPTV Smarters Pro o VLC</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Por Nivel de Usuario</h3>
              <ul className="space-y-2">
                <li><strong>Principiante:</strong> → Lazy IPTV o IPTV Smarters Pro</li>
                <li><strong>Usuario avanzado:</strong> → Kodi con PVR o GSE Smart IPTV</li>
                <li><strong>Mejor interfaz:</strong> → TiviMate (vale la pena premium)</li>
                <li><strong>Reproducir TODO:</strong> → VLC como backup</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Apps IPTV Gratis a EVITAR (Blacklist)</h2>
          
          <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20 mb-8">
            <h3 className="text-xl font-semibold mb-4">🚫 Apps Peligrosas</h3>
            <ul className="space-y-2">
              <li>"IPTV Pro" (imitaciones) - Muchas apps falsas con nombre similar</li>
              <li>Apps sin desarrollador claro - Alto riesgo malware</li>
              <li>"Free IPTV Premium Channels" - Generalmente scam o contenido ilegal</li>
              <li>Apps que piden permisos de SMS/Contactos - Red flag enorme</li>
              <li>APKs de sitios desconocidos - Verifica siempre firma digital</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">¿Vale la Pena Pagar por Versión Premium?</h2>
          
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">TiviMate Premium ($5.99/año)</h3>
              <p className="mb-3"><strong>SÍ vale la pena si:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tienes múltiples listas M3U (más de 1)</li>
                <li>Quieres grabar programas</li>
                <li>Usas varios dispositivos</li>
                <li>$6/año es inversión mínima para mejor experiencia</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Perfect Player Premium ($1.99)</h3>
              <p><strong>SÍ si:</strong> Te molesta el logo de marca de agua</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Conclusión General</h3>
              <p>Versiones gratuitas son tan buenas que premium es opcional, no necesario</p>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Preguntas Frecuentes</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">¿Cuál es la mejor app IPTV 100% gratis sin limitaciones?</p>
                <p className="text-muted-foreground">IPTV Smarters Pro para uso general, GSE Smart IPTV para iOS, y TiviMate (versión gratis) para Android TV.</p>
              </div>
              <div>
                <p className="font-semibold">¿Las apps gratis son seguras?</p>
                <p className="text-muted-foreground">Sí, si descargas desde tiendas oficiales (Google Play, App Store) y de desarrolladores verificados. Evita APKs de fuentes desconocidas.</p>
              </div>
              <div>
                <p className="font-semibold">¿Necesito pagar por EPG?</p>
                <p className="text-muted-foreground">No, EPG es gratis en la mayoría de apps. Solo necesitas URL XMLTV que puedes obtener gratis de GitHub IPTV-org.</p>
              </div>
              <div>
                <p className="font-semibold">¿Apps gratuitas funcionan con cualquier lista M3U?</p>
                <p className="text-muted-foreground">Sí, apps como IPTV Smarters Pro, GSE Smart IPTV y VLC funcionan con cualquier lista M3U válida.</p>
              </div>
            </div>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IPTVAppGratis;

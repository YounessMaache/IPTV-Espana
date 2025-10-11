import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { Link } from "react-router-dom";

const ListasIPTV2025 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Listas IPTV 2025: Todo lo Que Necesitas Saber
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Si buscas listas IPTV 2025, probablemente quieres ver televisión por internet sin pagar las altas tarifas de Movistar o Vodafone. Las listas IPTV (archivos M3U) son la forma más común de acceder a canales de televisión por internet, pero encontrar listas que funcionen bien, tengan todos los canales españoles y no se corten constantemente es complicado. En esta guía te explico de forma clara y sencilla qué son exactamente las listas IPTV, cómo funcionan, dónde puedes conseguirlas, cómo instalarlas en tu Smart TV o Fire TV Stick, y por qué usar un servicio profesional como iptvespana.site es mucho mejor que andar buscando listas gratis que dejan de funcionar cada semana.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">¿Qué Son las Listas IPTV?</h2>
          
          <div className="p-6 rounded-lg border bg-card mb-8">
            <h3 className="text-xl font-semibold mb-3">Explicación Sencilla</h3>
            <p className="mb-4">
              Una lista IPTV es como una agenda de contactos, pero en vez de números de teléfono, contiene direcciones de internet (URLs) donde están los canales de televisión.
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Ejemplo Simple:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Tu TV normal:</strong> sintoniza canales por antena</li>
                  <li><strong>IPTV con lista M3U:</strong> tu app lee la lista y conecta a cada canal por internet</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Formato del Archivo:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Se llama archivo M3U o M3U8</li>
                  <li>Es un archivo de texto simple</li>
                  <li>Puedes abrirlo con el Bloc de notas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-muted mb-8">
            <h3 className="text-xl font-semibold mb-3">Ejemplo de Contenido M3U:</h3>
            <pre className="bg-background p-4 rounded overflow-x-auto text-sm">
{`#EXTM3U
#EXTINF:-1,La 1 TVE
http://servidor.com/la1.m3u8
#EXTINF:-1,Antena 3
http://servidor.com/antena3.m3u8
#EXTINF:-1,Telecinco
http://servidor.com/telecinco.m3u8`}
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">¿Cómo Funciona?</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</span>
              <p>Descargas o consigues URL de una lista M3U</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</span>
              <p>La cargas en una aplicación IPTV</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</span>
              <p>La app lee la lista</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</span>
              <p>Te muestra todos los canales disponibles</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</span>
              <p>Cuando seleccionas un canal, conecta a esa dirección de internet</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">6</span>
              <p className="font-bold text-primary">¡Ves el canal!</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Tipos de Listas IPTV en España</h2>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">1. Listas M3U Gratis 🆓</h3>
              
              <div className="mb-4">
                <p className="font-semibold mb-2">¿Dónde se Encuentran?</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Grupos de Telegram</li>
                  <li>Foros como ForoCoches</li>
                  <li>GitHub (proyectos open source)</li>
                  <li>Páginas webs random</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-2">Qué Suelen Incluir:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Canales TDT básicos (La1, Antena3, Telecinco)</li>
                  <li>Algunos canales internacionales</li>
                  <li>Calidad muy variable</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="font-semibold mb-2 text-destructive">❌ Problemas Comunes:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Se caen constantemente (funcionan 2-3 días)</li>
                    <li>• Canales se cortan en momentos importantes</li>
                    <li>• Buffering continuo</li>
                    <li>• Mala calidad de imagen</li>
                    <li>• Muchos canales no funcionan</li>
                    <li>• Sin canales de pago (deportes, películas)</li>
                    <li>• Sin soporte técnico</li>
                    <li>• Tienes que buscar nuevas listas cada semana</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-semibold mb-2 text-primary">✅ Ventajas:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Gratis (obvio)</li>
                    <li>• Para probar cómo funciona IPTV</li>
                    <li>• Algunos canales básicos sí funcionan</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-muted">
                <p className="font-semibold mb-2">¿Vale la Pena?</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Solo para probar y aprender</li>
                  <li>No para uso diario</li>
                  <li>Frustrante a largo plazo</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">2. Listas M3U de Pago (Servicios Económicos) 💰</h3>
              
              <div className="mb-4">
                <p className="font-semibold mb-2">Precio Típico:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>10-20€/mes</li>
                  <li>Se venden en Telegram, AliExpress, grupos WhatsApp</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-2">Qué Prometen:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>"Miles de canales"</li>
                  <li>"Todos los deportes"</li>
                  <li>"Netflix, HBO gratis"</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 mb-4">
                <p className="font-semibold mb-2 text-destructive">⚠️ Problemas Frecuentes:</p>
                <ul className="space-y-1">
                  <li>• Calidad inconsistente (funciona bien un mes, mal el siguiente)</li>
                  <li>• Vendedores desaparecen (te quedas sin servicio)</li>
                  <li>• Sin garantías ni soporte real</li>
                  <li>• Muchos son revendedores de otros servicios</li>
                  <li>• Cierran sin avisar</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <p className="font-semibold mb-2">Algunos Sí Funcionan Decentemente:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hay vendedores serios</li>
                  <li>Pero es lotería encontrarlos</li>
                  <li>Difícil saber si son confiables antes de pagar</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
              <h3 className="text-xl font-semibold mb-3">3. Servicios IPTV Profesionales 🌟</h3>
              
              <p className="mb-4">
                <strong>Ejemplo:</strong>{" "}
                <Link to="/" className="text-primary hover:underline font-semibold">
                  IPTVEspana.site
                </Link>
              </p>

              <div className="mb-4">
                <p className="font-semibold mb-2">Diferencias Clave:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>✅ Página web profesional</li>
                  <li>✅ Empresa seria detrás</li>
                  <li>✅ Soporte técnico 24/7</li>
                  <li>✅ Garantía de funcionamiento</li>
                  <li>✅ Tecnología anti-buffering</li>
                  <li>✅ Actualizaciones constantes</li>
                  <li>✅ No desaparecen de la noche a la mañana</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                <p className="font-semibold mb-2">Precio:</p>
                <ul className="space-y-1">
                  <li>• Desde €2.91/mes (plan anual)</li>
                  <li>• Más barato que Netflix</li>
                  <li>• Incluye TODO</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Listas M3U España - ¿Qué Canales Deberían Incluir?</h2>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Canales Imprescindibles para España</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">TDT Básica:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>La 1, La 2 (TVE)</li>
                    <li>Antena 3, La Sexta</li>
                    <li>Telecinco, Cuatro</li>
                    <li>Paramount Network</li>
                    <li>TRECE</li>
                    <li>Clan, Disney Channel (niños)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Canales Autonómicos:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>TV3, 3/24 (Cataluña)</li>
                    <li>Telemadrid (Madrid)</li>
                    <li>Canal Sur (Andalucía)</li>
                    <li>ETB (País Vasco)</li>
                    <li>À Punt (Valencia)</li>
                    <li>Todos los regionales</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Deportes (Lo Más Buscado):</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Movistar LaLiga (todos los canales)</li>
                    <li>DAZN LaLiga</li>
                    <li>Movistar Champions League</li>
                    <li>DAZN (Premier, UFC)</li>
                    <li>GOL</li>
                    <li>Eurosport</li>
                    <li>beIN Sports</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Cine y Series:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Movistar Cine Español</li>
                    <li>Hollywood, Action, Drama</li>
                    <li>AXN, Fox, TNT</li>
                    <li>Comedy Central</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Internacional:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Canales UK, USA</li>
                    <li>Latinoamérica</li>
                    <li>Portugal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Cómo Usar Listas IPTV - Guía Paso a Paso</h2>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 1: Conseguir la Lista M3U</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Opción A: Lista Gratis de Prueba</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Buscar en Google: "lista m3u españa 2025"</li>
                    <li>Encontrarás páginas con listas</li>
                    <li>Descargar archivo .m3u</li>
                    <li>O copiar URL de la lista</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-semibold mb-2">Opción B: IPTVEspana.site (Recomendado)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ir a iptvespana.site</li>
                    <li>Contratar plan (desde €7/mes)</li>
                    <li>Recibes por email:
                      <ul className="list-circle pl-6 mt-1">
                        <li>URL del servidor</li>
                        <li>Usuario</li>
                        <li>Contraseña</li>
                        <li>Sistema Xtream Codes (mejor que M3U simple)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 2: Elegir Aplicación IPTV</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Para Fire TV Stick / Android TV:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>IPTV Smarters Pro (la más popular)</li>
                    <li>TiviMate (interfaz bonita)</li>
                    <li>Perfect Player (ligera)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Para Smart TV Samsung/LG:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Smart IPTV</li>
                    <li>IPTV Smarters Pro (si disponible)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Para iPhone/iPad:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>GSE Smart IPTV</li>
                    <li>IPTV Smarters Pro</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Para Android Móvil:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>IPTV Smarters Pro</li>
                    <li>GSE IPTV</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Para PC Windows:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>VLC Media Player</li>
                    <li>IPTV Smarters Pro (versión PC)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 3: Instalar la App</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">En Fire TV Stick (Más Popular en España)</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>En Fire TV, ir a Buscar 🔍</li>
                    <li>Escribir "Downloader"</li>
                    <li>Instalar app Downloader (icono naranja)</li>
                    <li>Abrir Downloader</li>
                    <li>Escribir URL: iptvsmarters.com</li>
                    <li>Descargar e instalar</li>
                    <li>Abrir IPTV Smarters Pro</li>
                  </ol>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">En Android Móvil</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Google Play Store</li>
                    <li>Buscar "IPTV Smarters Pro"</li>
                    <li>Instalar</li>
                    <li>Abrir</li>
                  </ol>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">En Smart TV Samsung</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Smart Hub → Apps</li>
                    <li>Buscar "Smart IPTV"</li>
                    <li>Instalar (puede costar 5€ activación única)</li>
                    <li>Anotar código MAC que aparece</li>
                    <li>Ir a siptv.eu en PC</li>
                    <li>Registrar tu MAC</li>
                    <li>Subir tu lista M3U</li>
                    <li>Volver a TV, aparecerán canales</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 4: Cargar Tu Lista M3U</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">Si Tienes Lista M3U Simple:</p>
                  <p className="text-sm mb-2">En IPTV Smarters Pro:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Abrir app</li>
                    <li>Seleccionar "Add M3U Playlist"</li>
                    <li>Opciones:
                      <ul className="list-circle pl-6 mt-1">
                        <li>M3U URL: pegar URL de tu lista</li>
                        <li>M3U File: buscar archivo descargado</li>
                      </ul>
                    </li>
                    <li>Darle nombre: "Mi IPTV"</li>
                    <li>Click "Add"</li>
                    <li>Esperar que cargue (30 segundos - 2 minutos)</li>
                    <li>¡Listo! Aparecen los canales</li>
                  </ol>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-semibold mb-2">Si Tienes IPTVEspana.site (Sistema Xtream):</p>
                  <p className="text-sm mb-2">En IPTV Smarters Pro:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Abrir app</li>
                    <li>Seleccionar "Login with Xtream Codes API"</li>
                    <li>Ingresar datos que te enviamos por email:
                      <ul className="list-circle pl-6 mt-1">
                        <li>URL Server: http://tuservidor.com:8080</li>
                        <li>Username: tu_usuario</li>
                        <li>Password: tu_contraseña</li>
                        <li>Name: IPTVEspana</li>
                      </ul>
                    </li>
                    <li>Click "Add User"</li>
                    <li>Carga automáticamente TODO:
                      <ul className="list-circle pl-6 mt-1">
                        <li>Canales organizados por categorías</li>
                        <li>EPG (guía de programación)</li>
                        <li>Películas y series</li>
                      </ul>
                    </li>
                    <li className="font-bold text-primary">¡Mucho más fácil que M3U!</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Paso 5: Ver Tus Canales</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">En la app verás categorías:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>España</li>
                    <li>Deportes</li>
                    <li>Películas</li>
                    <li>Series</li>
                    <li>Internacional</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Cómo ver:</p>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>Seleccionar categoría</li>
                    <li>Elegir canal</li>
                    <li>Click y ¡a ver!</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-2">Funciones Útiles:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Favoritos:</strong> marcar canales que más ves</li>
                    <li><strong>EPG:</strong> ver qué está en cada canal</li>
                    <li><strong>Buscar:</strong> encontrar canal rápido</li>
                    <li><strong>Grabar:</strong> algunos servicios permiten</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Lista M3U España - Canales Deportivos</h2>

          <div className="p-6 rounded-lg border bg-card mb-8">
            <h3 className="text-xl font-semibold mb-3">Lo Más Buscado: Fútbol</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Para Ver Todo el Fútbol Necesitas:</p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="font-semibold mb-2">LaLiga EA Sports:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Movistar LaLiga 1, 2, 3, 4, 5, 6, 7, 8</li>
                      <li>DAZN LaLiga</li>
                      <li>LaLiga TV Bar</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-muted">
                    <p className="font-semibold mb-2">Champions League:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Movistar Liga de Campeones 1-8</li>
                      <li>Todos los partidos</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-muted">
                    <p className="font-semibold mb-2">Otros Deportes:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Premier League (DAZN)</li>
                      <li>NBA (Movistar+ Deportes)</li>
                      <li>MotoGP (DAZN)</li>
                      <li>Tenis, F1, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="font-semibold mb-2 text-destructive">Realidad con Listas Gratis:</p>
                  <ul className="space-y-1 text-sm">
                    <li>❌ Los canales deportivos premium NO están en listas gratis</li>
                    <li>❌ Si aparecen, no funcionan o se cortan</li>
                    <li>❌ En momento del gol: buffering</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-semibold mb-2 text-primary">Con IPTVEspana.site:</p>
                  <ul className="space-y-1 text-sm">
                    <li>✅ Todos los canales deportivos incluidos</li>
                    <li>✅ Calidad HD/4K</li>
                    <li>✅ Sin cortes en momentos importantes</li>
                    <li>✅ Tecnología anti-buffering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">M3U IPTV España - Problemas Comunes</h2>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Problema 1: "No Puedo Cargar la Lista"</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">Causas:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>URL incorrecta</li>
                    <li>Lista caducada</li>
                    <li>Internet lento</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Soluciones:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Verificar URL (copiar/pegar bien)</li>
                    <li>Probar en VLC primero:
                      <ul className="list-circle pl-6 mt-1 text-sm">
                        <li>Abrir VLC → Media → Open Network Stream</li>
                        <li>Pegar URL</li>
                        <li>Si funciona en VLC, la lista es buena</li>
                      </ul>
                    </li>
                    <li>Contactar a quien te dio la lista</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Problema 2: "Canales Se Cortan / Buffering"</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">Causas:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Internet lento</li>
                    <li>Lista gratis sobrecargada</li>
                    <li>Servidor malo</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Soluciones:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Speedtest: necesitas mínimo 10 Mbps</li>
                    <li>Cerrar otras descargas</li>
                    <li>Usar cable ethernet en vez de WiFi</li>
                    <li className="font-bold text-primary">Mejor solución: cambiar a servicio profesional como IPTVEspana.site</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Problema 3: "Muchos Canales No Funcionan"</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">Causas:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lista desactualizada</li>
                    <li>Canales muertos</li>
                    <li>Lista gratis de mala calidad</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Soluciones:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Buscar lista más reciente</li>
                    <li>O usar servicio de pago que actualiza automáticamente</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Problema 4: "EPG No Aparece"</h3>
              
              <p className="mb-3"><strong>EPG</strong> = Guía de programación (qué hay en cada canal)</p>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">Causas:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lista M3U simple no incluye EPG</li>
                    <li>Hay que configurarlo aparte</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Solución:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Buscar URL EPG: "epg españa m3u"</li>
                    <li>En app: Settings → EPG → pegar URL</li>
                    <li className="font-bold text-primary">O usar servicio Xtream Codes (IPTVEspana.site) que incluye EPG automático</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">IPTVEspana.site vs Listas M3U Gratis</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted">
                  <th className="text-left p-3">Aspecto</th>
                  <th className="text-left p-3">Listas M3U Gratis</th>
                  <th className="text-left p-3">IPTVEspana.site</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Precio</td>
                  <td className="p-3">0€</td>
                  <td className="p-3 text-primary font-bold">€2.91/mes (plan anual)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Canales que Funcionan</td>
                  <td className="p-3 text-destructive">20-30%</td>
                  <td className="p-3 text-primary font-bold">99%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Calidad</td>
                  <td className="p-3 text-destructive">Mala/variable</td>
                  <td className="p-3 text-primary font-bold">HD/4K estable</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Buffering</td>
                  <td className="p-3 text-destructive">Constante</td>
                  <td className="p-3 text-primary font-bold">Casi nulo</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Deportes Premium</td>
                  <td className="p-3 text-destructive">No funcionan</td>
                  <td className="p-3 text-primary font-bold">Todos incluidos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Duración</td>
                  <td className="p-3 text-destructive">Días/semanas</td>
                  <td className="p-3 text-primary font-bold">Mientras pagues</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Soporte</td>
                  <td className="p-3 text-destructive">Ninguno</td>
                  <td className="p-3 text-primary font-bold">24/7 en español</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">EPG</td>
                  <td className="p-3 text-destructive">Configurar manual</td>
                  <td className="p-3 text-primary font-bold">Automático incluido</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Películas/Series</td>
                  <td className="p-3 text-destructive">Pocas/ninguna</td>
                  <td className="p-3 text-primary font-bold">80,000+</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Netflix/Disney+</td>
                  <td className="p-3 text-destructive">No</td>
                  <td className="p-3 text-primary font-bold">Incluido</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Actualizaciones</td>
                  <td className="p-3 text-destructive">Buscar nuevas cada semana</td>
                  <td className="p-3 text-primary font-bold">Automáticas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Tiempo Buscando Listas</td>
                  <td className="p-3 text-destructive">Horas/semana</td>
                  <td className="p-3 text-primary font-bold">0 minutos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-8">
            <h3 className="text-xl font-semibold mb-3">Conclusión:</h3>
            <ul className="space-y-2">
              <li>• <strong>Listas gratis:</strong> para probar/aprender</li>
              <li>• <strong>IPTVEspana.site:</strong> para uso real y cómodo</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Por Qué IPTVEspana.site es Mejor Que Buscar Listas</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">1. Tiempo es Dinero</h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-destructive/10">
                  <p className="font-semibold mb-2">Con Listas Gratis:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Buscas lista nueva cada semana: 1-2 horas</li>
                    <li>• Al mes: 4-8 horas buscando</li>
                    <li>• Tu tiempo vale más</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10">
                  <p className="font-semibold mb-2">Con IPTVEspana.site:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Configuras una vez: 5 minutos</li>
                    <li>• Funciona todo el año</li>
                    <li>• 0 mantenimiento</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">2. Estabilidad</h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-destructive/10">
                  <p className="font-semibold mb-2">Listas Gratis:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Funcionan días/semanas</li>
                    <li>• En momento del gol: se corta</li>
                    <li>• Frustración constante</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10">
                  <p className="font-semibold mb-2">IPTVEspana.site:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Servidores profesionales</li>
                    <li>• Tecnología anti-buffering</li>
                    <li>• No te pierdes nada importante</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">3. Catálogo Completo</h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-destructive/10">
                  <p className="font-semibold mb-2">Listas Gratis:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Solo TDT básica</li>
                    <li>• Sin deportes premium</li>
                    <li>• Sin películas recientes</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10">
                  <p className="font-semibold mb-2">IPTVEspana.site:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 20,000+ canales</li>
                    <li>• Todo el fútbol</li>
                    <li>• Netflix, Disney+ incluido</li>
                    <li>• 80,000 películas/series</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">4. Soporte</h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-destructive/10">
                  <p className="font-semibold mb-2">Listas Gratis:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• No funciona algo: estás solo</li>
                    <li>• Buscas solución en Google horas</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10">
                  <p className="font-semibold mb-2">IPTVEspana.site:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• WhatsApp 24/7</li>
                    <li>• Te ayudan a instalar gratis</li>
                    <li>• Resuelven cualquier problema</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card md:col-span-2">
              <h3 className="text-xl font-semibold mb-3">5. Precio Real</h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">¿Realmente las Listas Gratis Son Gratis?</p>
                  <p className="mb-2">Considera:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Tu tiempo buscando: 5 horas/mes × €10/hora = <strong>€50</strong></li>
                    <li>• Frustración: no tiene precio</li>
                    <li>• Perderte partidos importantes: ¿vale la pena?</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                  <p className="font-semibold mb-2">IPTVEspana.site:</p>
                  <ul className="space-y-1">
                    <li>• €2.91/mes (plan anual)</li>
                    <li>• Menos que un café</li>
                    <li>• Todo incluido</li>
                    <li>• Cero frustraciones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Planes IPTVEspana.site - Precios 2025</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Plan 1 Mes - €7</h3>
              <p className="text-sm text-muted-foreground mb-4">Para Probar Sin Compromiso</p>
              
              <div className="space-y-2 mb-4">
                <p className="font-semibold">Incluye:</p>
                <ul className="space-y-1 text-sm">
                  <li>✅ 20,000+ Canales</li>
                  <li>✅ 80,000+ Películas y Series</li>
                  <li>✅ Netflix, Prime, Disney+ integrados</li>
                  <li>✅ Calidad 4K/FHD/HD</li>
                  <li>✅ 5 dispositivos simultáneos</li>
                  <li>✅ Soporte 24/7</li>
                  <li>✅ EPG completo</li>
                  <li>✅ Anti-buffering</li>
                  <li>✅ Ayuda instalación gratis</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Plan 6 Meses - €25</h3>
                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">⭐ MÁS POPULAR</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Ahorra 30% - Solo €4.16/mes</p>
              
              <div className="space-y-2 mb-4">
                <p className="font-semibold">Por qué es el favorito:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Ahorro significativo vs mensual</li>
                  <li>• Perfecto para temporada fútbol completa</li>
                  <li>• Precio equilibrado</li>
                  <li>• No te preocupas de renovar cada mes</li>
                  <li>• Todo lo del plan 1 mes incluido</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Plan 12 Meses - €35</h3>
                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">💎 MEJOR VALOR</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Ahorra 50% - Solo €2.91/mes</p>
              
              <div className="space-y-2 mb-4">
                <p className="font-semibold">El más recomendado:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Precio de un café al mes</li>
                  <li>• Te olvidas por un año completo</li>
                  <li>• Máximo ahorro</li>
                  <li>• Toda la temporada de fútbol + siguiente</li>
                  <li>• Todo incluido + tranquilidad todo el año</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Cómo Contratar IPTVEspana.site</h2>

          <div className="p-6 rounded-lg border bg-card mb-8">
            <h3 className="text-xl font-semibold mb-3">Proceso Simple (5 Minutos)</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-semibold">Ir a la Web</p>
                  <p className="text-sm text-muted-foreground">Visitar iptvespana.site - Navegar seguro, SSL incluido</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-semibold">Elegir Plan</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5">
                    <li>1 mes: si quieres probar</li>
                    <li>6 meses: recomendado (mejor valorado)</li>
                    <li>12 meses: mejor precio</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-semibold">Pagar</p>
                  <p className="text-sm text-muted-foreground">Tarjeta crédito/débito, PayPal - Pago seguro</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</span>
                <div>
                  <p className="font-semibold">Recibir Acceso</p>
                  <p className="text-sm text-muted-foreground">Email instantáneo con: URL servidor, Usuario, Contraseña, Instrucciones instalación</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</span>
                <div>
                  <p className="font-semibold">Instalar (5 min)</p>
                  <p className="text-sm text-muted-foreground">Seguir instrucciones email o pedir ayuda al soporte (gratis)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">6</span>
                <div>
                  <p className="font-semibold text-primary">Disfrutar</p>
                  <p className="text-sm">¡Ver TV en 10 minutos desde que decides!</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">IPTV Smarters Pro - La App Más Popular</h2>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Por Qué IPTV Smarters Pro?</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>✅ <strong>Gratis</strong> - no pagas la app</li>
                  <li>✅ <strong>Fácil de usar</strong> - interfaz simple</li>
                  <li>✅ <strong>Compatible</strong> - Android, iOS, TV, PC</li>
                </ul>
                <ul className="space-y-2">
                  <li>✅ <strong>Popular</strong> - millones de usuarios</li>
                  <li>✅ <strong>Funciona perfecto</strong> con IPTVEspana.site</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Descargar IPTV Smarters Pro</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">Android Móvil/Tablet:</p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Google Play Store</li>
                    <li>Buscar "IPTV Smarters Pro"</li>
                    <li>Instalar (gratis)</li>
                  </ol>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">Fire TV Stick:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Método Downloader (explicado arriba)</li>
                    <li>O buscar en Amazon Appstore</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">iPhone/iPad:</p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>App Store</li>
                    <li>Buscar "IPTV Smarters Pro"</li>
                    <li>Instalar</li>
                  </ol>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-semibold mb-2">PC Windows:</p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Ir a iptvsmarters.com</li>
                    <li>Descargar versión Windows</li>
                    <li>Instalar</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
              <h3 className="text-xl font-semibold mb-3">Configurar IPTV Smarters Pro con IPTVEspana.site</h3>
              
              <div className="space-y-3">
                <p className="font-semibold">Pasos:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Abrir app</li>
                  <li>"Login with Xtream Codes"</li>
                  <li>Ingresar datos email IPTVEspana.site:
                    <ul className="list-circle pl-5 mt-1 text-sm">
                      <li>Server URL</li>
                      <li>Username</li>
                      <li>Password</li>
                    </ul>
                  </li>
                  <li>Add User</li>
                  <li className="font-bold text-primary">¡Listo en 30 segundos!</li>
                </ol>

                <div className="mt-4 p-4 rounded-lg bg-primary text-primary-foreground">
                  <p className="font-semibold mb-2">Ventajas Sistema Xtream vs M3U:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Carga más rápido</li>
                    <li>• EPG automático</li>
                    <li>• VOD integrado</li>
                    <li>• Más profesional</li>
                    <li>• Más estable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Listas IPTV Telegram - ¿Vale la Pena?</h2>

          <div className="p-6 rounded-lg border bg-card mb-8">
            <h3 className="text-xl font-semibold mb-3">La Realidad de Telegram</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Hay Miles de Grupos:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>"Listas IPTV España gratis"</li>
                  <li>"M3U actualizadas 2025"</li>
                  <li>"IPTV premium gratis"</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">¿Qué Encuentras?</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>80% listas que no funcionan</li>
                  <li>15% listas que funcionan 1-2 días</li>
                  <li>5% vendedores (algunos serios, muchos estafadores)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="font-semibold mb-2 text-destructive">Problemas:</p>
                <ul className="space-y-1">
                  <li>• Spam constante</li>
                  <li>• Listas viejas</li>
                  <li>• Virus en algunos enlaces</li>
                  <li>• Vendedores desaparecen con tu dinero</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <p className="font-semibold mb-2">¿Recomendamos?</p>
                <ul className="space-y-1">
                  <li>• Solo para curiosear</li>
                  <li>• No para servicio serio</li>
                  <li className="font-bold text-primary">• Mejor: servicio web profesional con garantías</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">IPTV España Opiniones - Qué Dice la Gente</h2>

          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Opiniones Reales IPTVEspana.site</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="font-semibold ml-2">- Miguel, Madrid</span>
                  </div>
                  <p className="text-sm italic">"Llevaba meses con listas gratis de Telegram que se cortaban cada dos por tres. Probé IPTVEspana.site por 7€ el primer mes y ya llevo 6 meses. Cero cortes, todos los partidos en HD. Vale cada céntimo."</p>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="font-semibold ml-2">- Carmen, Barcelona</span>
                  </div>
                  <p className="text-sm italic">"Me instalaron todo por WhatsApp en 10 minutos. Tengo 65 años y soy un desastre con la tecnología, pero fue facilísimo. Ahora veo todos mis programas catalanes y series sin problemas."</p>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="font-semibold ml-2">- Javier, Sevilla</span>
                  </div>
                  <p className="text-sm italic">"Tenía Movistar+ que me costaba 45€/mes. Ahora pago 35€ AL AÑO por IPTVEspana.site y tengo más canales. Ahorro 500€/año. No entiendo por qué no lo hice antes."</p>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="font-semibold ml-2">- Laura, Valencia</span>
                  </div>
                  <p className="text-sm italic">"Lo mejor es que funciona en todos mis dispositivos. Móvil, tablet, Fire Stick en salón y Fire Stick en habitación. Una sola cuenta, todo incluido."</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Comparación con Listas Gratis (ForoCoches/Reddit)</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="font-semibold mb-2 text-destructive">Comentarios Típicos Listas Gratis:</p>
                  <ul className="space-y-2 text-sm">
                    <li>"Dejó de funcionar otra vez 😤"</li>
                    <li>"Alguien tiene lista actualizada de hoy?"</li>
                    <li>"Se me corta en todos los goles"</li>
                    <li>"Paso más tiempo buscando listas que viendo TV"</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-semibold mb-2 text-primary">Comentarios IPTVEspana.site:</p>
                  <ul className="space-y-2 text-sm">
                    <li>"Por fin estabilidad"</li>
                    <li>"No he buscado listas en meses"</li>
                    <li>"El soporte responde en minutos"</li>
                    <li>"Calidad siempre perfecta"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">IPTV Trial - ¿Hay Prueba Gratis?</h2>

          <div className="p-6 rounded-lg border bg-card mb-8">
            <h3 className="text-xl font-semibold mb-3">IPTVEspana.site - Política Transparente</h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="font-semibold mb-2">Plan 1 Mes = Tu Prueba</p>
                <ul className="space-y-1">
                  <li>• Por solo €7</li>
                  <li>• 30 días completos para probar</li>
                  <li>• Si no te gusta: no renuevas</li>
                  <li>• Sin permanencia</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">¿Por Qué No Hay Trial Gratis?</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Evita abuso (gente que pide trial cada mes)</li>
                  <li>Mantiene calidad del servicio</li>
                  <li>€7 es precio justo para probar mes completo</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <p className="font-semibold mb-2">Garantía:</p>
                <ul className="space-y-1">
                  <li>• Si hay problemas técnicos nuestros: reembolso</li>
                  <li>• Soporte ayuda con cualquier duda instalación</li>
                  <li>• Honestidad total</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">IPTV España Forocoches - Qué Dicen</h2>

          <div className="p-6 rounded-lg border bg-card mb-8">
            <h3 className="text-xl font-semibold mb-3">Opiniones en el Foro Más Popular de España</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Temas Recurrentes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>"¿Mejor servicio IPTV España 2025?"</li>
                  <li>"Listas M3U que funcionen"</li>
                  <li>"Opiniones IPTVEspana.site"</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="font-semibold mb-2">Consensus General:</p>
                <ul className="space-y-1">
                  <li>• Listas gratis: demasiado trabajo mantener</li>
                  <li>• AliExpress: lotería (algunos bien, muchos estafa)</li>
                  <li>• Servicios profesionales españoles: mejor opción</li>
                  <li>• IPTVEspana.site: mencionado positivamente por precio/calidad</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Preguntas Frecuentes (FAQ)</h2>

          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Qué es mejor: lista M3U gratis o servicio de pago?</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Gratis:</strong> para probar/aprender cómo funciona IPTV<br/>
                <strong>Pago (IPTVEspana.site):</strong> para uso real y cómodo
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Cuánto cuesta un buen servicio IPTV en España?</h3>
              <p className="text-sm text-muted-foreground">
                IPTVEspana.site: desde €2.91/mes (plan anual) - Mucho más barato que Movistar/Vodafone
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Las listas M3U de Telegram funcionan?</h3>
              <p className="text-sm text-muted-foreground">
                Algunas sí, temporalmente. La mayoría no funcionan o duran días. No confiable para uso serio.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Necesito VPN para usar IPTV?</h3>
              <p className="text-sm text-muted-foreground">
                Depende del servicio. Con IPTVEspana.site: opcional (ya tenemos servidores optimizados). Para privacidad: puedes usar VPN sin problemas.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Funciona en Fire TV Stick?</h3>
              <p className="text-sm text-muted-foreground">
                Sí, perfecto. Es el dispositivo más popular. Instalación fácil en 5 minutos.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Cuántos dispositivos puedo usar?</h3>
              <p className="text-sm text-muted-foreground">
                5 dispositivos simultáneos. Una cuenta para toda la familia.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Qué pasa si no me funciona?</h3>
              <p className="text-sm text-muted-foreground">
                Soporte 24/7 te ayuda. WhatsApp directo. Instalación asistida gratis.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Incluye Netflix y Disney+?</h3>
              <p className="text-sm text-muted-foreground">
                Sí, integrados en plataforma. Sin pagar extra.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Se corta en momentos importantes?</h3>
              <p className="text-sm text-muted-foreground">
                No con IPTVEspana.site. Tecnología anti-buffering. Servidores premium.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">¿Puedo cancelar cuando quiera?</h3>
              <p className="text-sm text-muted-foreground">
                Sí, sin permanencia. Sin penalizaciones.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Conclusión: ¿Lista M3U Gratis o IPTVEspana.site?</h2>

          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Resumen Honesto</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-3">Listas M3U Gratis:</p>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <p className="font-semibold text-sm mb-1">✅ Ventajas:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Para probar cómo funciona IPTV</li>
                        <li>• Aprender sin gastar dinero</li>
                        <li>• Ver canales TDT básicos ocasionalmente</li>
                      </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-destructive/10">
                      <p className="font-semibold text-sm mb-1 text-destructive">❌ Desventajas:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Inestables y poco confiables</li>
                        <li>• Sin deportes premium</li>
                        <li>• Buffering constante</li>
                        <li>• Pierdes tiempo buscando listas cada semana</li>
                        <li>• Frustración en partidos/programas importantes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3">IPTVEspana.site:</p>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <p className="font-semibold text-sm mb-1 text-primary">✅ Ventajas:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Estabilidad total - funciona siempre</li>
                        <li>• 20,000+ canales incluido TODO el fútbol</li>
                        <li>• Netflix, Disney+, HBO incluido</li>
                        <li>• Calidad 4K/HD sin cortes</li>
                        <li>• Precio: €2.91/mes (menos que café)</li>
                        <li>• Soporte 24/7 en español</li>
                        <li>• Instalación gratis asistida</li>
                        <li>• 5 dispositivos simultáneos</li>
                        <li>• Sin permanencia</li>
                        <li>• Cero mantenimiento</li>
                      </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <p className="font-semibold text-sm mb-1">❌ Desventaja:</p>
                      <ul className="text-sm space-y-1">
                        <li>• No es gratis (pero vale cada céntimo)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
              <h3 className="text-xl font-semibold mb-3">Nuestra Recomendación</h3>
              
              <ul className="space-y-2">
                <li>• <strong>Si quieres probar IPTV:</strong> busca lista gratis M3U para entender cómo funciona</li>
                <li>• <strong>Si quieres usar IPTV realmente:</strong> contrata IPTVEspana.site</li>
                <li>• <strong>Ahorra tiempo y frustraciones:</strong> €2.91/mes es inversión que vale la pena</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-primary text-primary-foreground">
              <h3 className="text-xl font-semibold mb-3">Empieza Ahora:</h3>
              
              <ol className="space-y-2 mb-4">
                <li>1. Ve a{" "}
                  <Link to="/" className="underline font-bold">
                    iptvespana.site
                  </Link>
                </li>
                <li>2. Elige plan 6 meses (€25 - más popular)</li>
                <li>3. Recibe acceso instantáneo</li>
                <li>4. Instala en 5 minutos (ayuda gratis)</li>
                <li>5. Disfruta TV sin preocupaciones</li>
              </ol>

              <p className="font-bold text-lg">
                No pierdas más tiempo buscando listas que no funcionan
              </p>
            </div>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ListasIPTV2025;

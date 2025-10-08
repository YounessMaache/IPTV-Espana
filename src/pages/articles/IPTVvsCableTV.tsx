import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";

const IPTVvsCableTV = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Comparativa
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IPTV vs Cable TV: ¿Cuál es Mejor en 2025?
            </h1>
            <p className="text-xl text-muted-foreground">
              Comparación completa entre IPTV y televisión por cable. Ventajas, desventajas y precios.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p>
              La elección entre IPTV y cable tradicional es una decisión importante que afecta tu experiencia de entretenimiento y tu bolsillo. En esta guía completa, analizamos ambas opciones para ayudarte a tomar la mejor decisión.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Tabla Comparativa</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-card">
                    <th className="border border-border p-3 text-left">Característica</th>
                    <th className="border border-border p-3 text-left">IPTV</th>
                    <th className="border border-border p-3 text-left">Cable TV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3"><strong>Precio Mensual</strong></td>
                    <td className="border border-border p-3">15€ - 45€/año</td>
                    <td className="border border-border p-3">30€ - 80€/mes</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>Número de Canales</strong></td>
                    <td className="border border-border p-3">20,000+</td>
                    <td className="border border-border p-3">100-300</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>Calidad de Video</strong></td>
                    <td className="border border-border p-3">4K, Full HD, HD</td>
                    <td className="border border-border p-3">HD, SD</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>Instalación</strong></td>
                    <td className="border border-border p-3">No requiere técnico</td>
                    <td className="border border-border p-3">Requiere técnico</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>Dispositivos</strong></td>
                    <td className="border border-border p-3">Múltiples simultáneos</td>
                    <td className="border border-border p-3">Limitado por decodificadores</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>Contenido Internacional</strong></td>
                    <td className="border border-border p-3">Amplio</td>
                    <td className="border border-border p-3">Limitado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4">Ventajas del IPTV</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Precio más económico:</strong> Ahorra hasta un 70% comparado con el cable</li>
              <li><strong>Más contenido:</strong> Acceso a canales de todo el mundo</li>
              <li><strong>Flexibilidad:</strong> Ve desde cualquier dispositivo con internet</li>
              <li><strong>Sin contratos largos:</strong> Suscripciones mensuales sin permanencia</li>
              <li><strong>Calidad superior:</strong> Streaming en 4K disponible</li>
              <li><strong>VOD incluido:</strong> Miles de películas y series bajo demanda</li>
              <li><strong>Instalación inmediata:</strong> Comienza a ver en minutos</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Ventajas del Cable TV</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Estabilidad:</strong> No depende de la velocidad de internet</li>
              <li><strong>Soporte local:</strong> Atención al cliente presencial</li>
              <li><strong>Integración:</strong> A menudo viene con internet y teléfono</li>
              <li><strong>Familiaridad:</strong> Sistema tradicional conocido por todos</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Desventajas del IPTV</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Requiere internet:</strong> Necesitas una conexión estable</li>
              <li><strong>Consumo de datos:</strong> Usa tu ancho de banda</li>
              <li><strong>Configuración inicial:</strong> Puede requerir conocimientos básicos</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Desventajas del Cable TV</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Costo elevado:</strong> Mensualidades mucho más caras</li>
              <li><strong>Menos canales:</strong> Opciones limitadas</li>
              <li><strong>Poca flexibilidad:</strong> Solo en TV, no en móviles</li>
              <li><strong>Contratos largos:</strong> Permanencia de 12-24 meses</li>
              <li><strong>Instalación profesional:</strong> Espera por técnico</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Comparación de Costos Anuales</h2>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Cable TV Tradicional</h3>
              <p>Promedio 50€/mes x 12 meses = <strong>600€/año</strong></p>
              <p className="text-sm text-muted-foreground mt-2">Más costos de instalación y equipos</p>
              
              <h3 className="text-xl font-bold mb-4 mt-6">IPTV Premium</h3>
              <p>Plan anual = <strong>45€/año</strong></p>
              <p className="text-sm text-muted-foreground mt-2">Sin costos adicionales</p>
              
              <p className="text-primary font-bold mt-6 text-xl">
                Ahorro anual: 555€
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4">¿Cuál Elegir?</h2>
            
            <h3 className="text-2xl font-bold mt-6 mb-3">Elige IPTV si:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Quieres ahorrar dinero</li>
              <li>Tienes una buena conexión a internet (10+ Mbps)</li>
              <li>Deseas ver contenido en múltiples dispositivos</li>
              <li>Te interesa el contenido internacional</li>
              <li>Valoras la flexibilidad y variedad</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Elige Cable TV si:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tu conexión a internet es limitada o inestable</li>
              <li>Prefieres un servicio completamente tradicional</li>
              <li>No te importa pagar más por menos contenido</li>
              <li>Quieres todo integrado (internet + TV + teléfono)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Conclusión</h2>
            <p>
              En 2025, el IPTV es claramente la opción más inteligente para la mayoría de los usuarios. Ofrece más contenido, mejor calidad, mayor flexibilidad y un precio significativamente menor. El único requisito real es tener una conexión a internet decente, algo que la mayoría de hogares ya tienen.
            </p>
            <p className="mt-4">
              El cable tradicional está quedando obsoleto, con precios cada vez más altos y menos beneficios en comparación con las soluciones modernas de streaming.
            </p>
          </div>

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IPTVvsCableTV;
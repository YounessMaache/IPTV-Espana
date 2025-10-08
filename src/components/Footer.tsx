
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="IPTV España" 
              className="h-12 md:h-16"
            />
            <p className="text-sm text-muted-foreground">
              Tu proveedor IPTV de confianza con 9 años de experiencia ofreciendo servicios de streaming premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Características</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Precios</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/aprende" className="hover:text-primary transition-colors">Aprende</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">IPTV España</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Programa de Revendedores</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guía de Instalación</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Soporte</a></li>
              <li><a href="/test" className="hover:text-primary transition-colors">Test</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://api.whatsapp.com/message/DHGGPLDKC2L2N1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 IPTV España. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Reembolso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

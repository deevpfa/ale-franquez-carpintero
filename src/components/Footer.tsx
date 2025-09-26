import { Instagram, Facebook, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAF from "@/assets/logo-af.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-wood-light py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={logoAF} alt="AF Logo" className="h-12 w-12 rounded-full" />
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    Alejandro Franquez
                  </h3>
                  <p className="text-wood-light/80 text-sm">Carpintero Profesional</p>
                </div>
              </div>
              <p className="text-wood-light/70 text-sm max-w-xs">
                Creando muebles únicos con pasión y dedicación.
                Cada pieza cuenta una historia de calidad artesanal.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-white">
                Contacto
              </h4>
              <div className="space-y-2 text-sm text-wood-light/70">
                <p>deevpfa@gmail.com</p>
                <p>+54 9 2396 57-3695</p>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-white">
                Sígueme
              </h4>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-white/10 text-wood-light hover:text-white rounded-full"
                >
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-white/10 text-wood-light hover:text-white rounded-full"
                >
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-white/10 text-wood-light hover:text-white rounded-full"
                >
                  <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-wood-light/20 mt-8 pt-8 text-center">
            <p className="text-wood-light/60 text-sm flex items-center justify-center gap-1">
              &copy; {currentYear} Alejandro Franquez. Hecho con{" "}
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              y dedicación artesanal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
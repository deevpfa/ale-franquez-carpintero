import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAF from "@/assets/logo-af.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoAF} alt="AF Logo" className="h-10 w-10 rounded-full" />
            <div>
              <h1 className="font-display font-semibold text-lg text-foreground">
                Alejandro Franquez
              </h1>
              <p className="text-sm text-muted-foreground">Carpintero Profesional</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("trabajos")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Trabajos
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
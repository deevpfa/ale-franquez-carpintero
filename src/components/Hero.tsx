import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Alejandro Franquez
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-wood-dark font-medium mb-8">
            Carpintero Profesional
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Creando muebles únicos y personalizados con la más alta calidad artesanal. 
            Cada pieza cuenta una historia de dedicación y pasión por la madera.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("trabajos")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg font-medium"
            >
              Ver Trabajos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contacto")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-3 text-lg font-medium"
            >
              Contactar
            </Button>
          </div>

          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("trabajos")}
              className="rounded-full hover:bg-accent"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
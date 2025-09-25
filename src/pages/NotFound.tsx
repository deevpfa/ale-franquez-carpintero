import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-8xl font-display font-bold text-primary">404</h1>
          <h2 className="text-2xl font-display font-semibold text-foreground">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground">
            Lo siento, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Volver al Inicio
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Regresar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

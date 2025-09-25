import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, AlertCircle, Lock } from "lucide-react";
import Header from "@/components/Header";

const ImageUpload = () => {
  const { toast } = useToast();
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFiles || selectedFiles.length === 0) {
      toast({
        title: "Error",
        description: "Por favor selecciona al menos una imagen.",
        variant: "destructive"
      });
      return;
    }

    // This would require backend functionality
    toast({
      title: "Funcionalidad no disponible",
      description: "Para habilitar la carga de imágenes, necesitas conectar Supabase.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-primary mr-2" />
                <h1 className="font-display text-3xl font-bold text-foreground">
                  Cargar Imágenes
                </h1>
              </div>
              <p className="text-muted-foreground">
                Panel administrativo para gestionar la galería de trabajos
              </p>
            </div>

            <Card className="p-8 bg-card border-0 shadow-lg">
              <div className="mb-6 p-4 bg-accent/20 rounded-lg border border-accent">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-wood-medium mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">
                      Funcionalidad en desarrollo
                    </p>
                    <p className="text-muted-foreground">
                      Para habilitar la carga y gestión de imágenes, necesitas conectar tu proyecto con Supabase. 
                      Esto permitirá almacenar las imágenes de forma segura y mostrarlas automáticamente en tu galería.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleUpload} className="space-y-6">
                <div>
                  <Label htmlFor="images" className="text-foreground font-medium">
                    Seleccionar Imágenes
                  </Label>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 border-border"
                    disabled
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Formatos soportados: JPG, PNG, WEBP (máximo 5MB por imagen)
                  </p>
                </div>

                {selectedFiles && selectedFiles.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      Archivos seleccionados:
                    </Label>
                    <div className="space-y-1">
                      {Array.from(selectedFiles).map((file, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 font-medium"
                  disabled
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Subir Imágenes
                </Button>
              </form>
            </Card>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <a href="/">Volver al Inicio</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImageUpload;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { sendContactEmail, validateContactForm, type ContactFormData } from "@/services/emailService";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      toast({
        title: "Error de validación",
        description: validation.errors.join(", "),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using the service
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: result.message,
        });

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        toast({
          title: "Error al enviar",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error inesperado",
        description: "Ocurrió un error inesperado. Por favor contacta directamente a deevpfa@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contacto
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría conocer tu idea y crear algo único para ti.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 bg-accent/30 border-0 shadow-lg">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">alejandro.franquez@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+54 9 11 1234-5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Buenos Aires, Argentina</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-wood-light border-0 shadow-lg">
                <h3 className="font-display text-xl font-semibold text-wood-dark mb-4">
                  Proceso de Trabajo
                </h3>
                <div className="space-y-3 text-wood-dark/80">
                  <p>• Consulta inicial y diseño personalizado</p>
                  <p>• Selección de materiales premium</p>
                  <p>• Construcción artesanal detallada</p>
                  <p>• Acabado y entrega profesional</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card border-0 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nombre *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="mt-1 border-border focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu teléfono"
                      className="mt-1 border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="mt-1 border-border focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={6}
                    className="mt-1 border-border focus:ring-primary focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
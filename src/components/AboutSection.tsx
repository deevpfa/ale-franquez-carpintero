import { Card } from "@/components/ui/card";
import workshopImage from "@/assets/me.jpeg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre Mí
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce la historia detrás de cada pieza artesanal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-8 bg-card border-0 shadow-lg">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Mi Historia
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Con más de 8 años de experiencia en el arte de la carpintería,
                    he dedicado mi vida a crear piezas únicas que combinan la tradición
                    artesanal con el diseño contemporáneo.
                  </p>
                  <p>
                    Cada proyecto es una oportunidad para dar vida a la madera,
                    transformando materiales nobles en muebles funcionales y estéticamente
                    impecables que perduran en el tiempo.
                  </p>
                  <p>
                    Mi enfoque se centra en la calidad por encima de la cantidad,
                    trabajando estrechamente con cada cliente para crear piezas
                    personalizadas que reflejen su estilo y necesidades específicas.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-wood-light border-0 shadow-lg">
                <h3 className="font-display text-xl font-semibold text-wood-dark mb-4">
                  Mi Filosofía
                </h3>
                <p className="text-wood-dark/80">
                  "La madera tiene alma, y mi trabajo es revelarla a través de cada corte,
                  cada ensamble y cada acabado. Creo en el valor de lo hecho a mano,
                  en la belleza de lo imperfecto y en la durabilidad de lo bien construido."
                </p>
              </Card>
            </div>

            <div className="lg:order-first">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <img
                  src={workshopImage}
                  alt="Taller de carpintería de Alejandro Franquez"
                  className="w-full h-[500px] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
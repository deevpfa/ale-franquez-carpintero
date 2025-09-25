import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkCarousel from "@/components/WorkCarousel";
import WorkGallery from "@/components/WorkGallery";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Trabajos Section */}
        <section id="trabajos" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Mis Trabajos
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                  Cada pieza refleja años de experiencia y pasión por la carpintería artesanal
                </p>
              </div>
              
              {/* Carousel */}
              <div className="mb-16">
                <WorkCarousel />
              </div>
              
              {/* Gallery */}
              <WorkGallery />
            </div>
          </div>
        </section>

        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Card, CardContent } from "@/components/ui/card";

export const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&h=400&fit=crop",
      alt: "Instalación de estufa a leña en living",
      title: "Instalación en Living"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&h=400&fit=crop",
      alt: "Mantención de estufa a leña",
      title: "Mantención Preventiva"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1574906519613-98f4c6707fc8?w=500&h=400&fit=crop",
      alt: "Estufa a leña instalada en hogar",
      title: "Trabajo Terminado"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
      alt: "Chimenea y estufa en ambiente acogedor",
      title: "Ambiente Acogedor"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop",
      alt: "Instalación profesional de ductos",
      title: "Instalación de Ductos"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=500&h=400&fit=crop",
      alt: "Estufa moderna instalada",
      title: "Modelos Modernos"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mira algunos de nuestros trabajos realizados en la región de la Araucanía. 
            Cada instalación es única y adaptada a las necesidades del hogar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold text-center px-4">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Te gustó nuestro trabajo? ¡Contáctanos para tu proyecto!
          </p>
        </div>
      </div>
    </section>
  );
};

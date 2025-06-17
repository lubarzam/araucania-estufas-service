
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, MessageCircle } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56945123456"; // Reemplazar con el número real
    const message = "Hola, me interesa información sobre servicios de estufas a leña";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="inicio" className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Especialista en Estufas a Leña
            <span className="block text-orange-200">de Combustión Lenta</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Más de 40 años de experiencia en instalaciones, mantenciones y reparaciones
            en la región de la Araucanía
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-orange-200">
              <CheckCircle className="h-5 w-5" />
              <span>Instalaciones profesionales</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-200">
              <CheckCircle className="h-5 w-5" />
              <span>Mantenciones preventivas</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-200">
              <CheckCircle className="h-5 w-5" />
              <span>Reparaciones especializadas</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-orange-50 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              Ver Servicios
            </Button>
          </div>

          <p className="mt-8 text-orange-200">
            📍 Atendemos desde Vilcún a todas las comunas cercanas de la Araucanía
          </p>
        </div>
      </div>
    </section>
  );
};

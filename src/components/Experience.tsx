
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Clock } from "lucide-react";

export const Experience = () => {
  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "40+",
      label: "Años de Experiencia",
      description: "Cuatro décadas perfeccionando nuestro oficio"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "1000+",
      label: "Clientes Satisfechos",
      description: "Familias que confían en nuestro trabajo"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "100%",
      label: "Trabajos Certificados",
      description: "Cumplimos todas las normativas de seguridad"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      value: "10+",
      label: "Comunas Atendidas",
      description: "Cobertura en toda la región de la Araucanía"
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiencia que Respalda Calidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de cuatro décadas especializándose en estufas a leña de combustión lenta.
            Conocimiento transmitido de generación en generación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              ¿Por qué elegir nuestros servicios?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Experiencia Comprobada</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Más de 40 años especializándose exclusivamente en estufas a leña
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Conocimiento profundo de todas las marcas y modelos
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Técnicas tradicionales combinadas con tecnología moderna
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Servicio Local</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Conocemos el clima y las necesidades de la Araucanía
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Servicio rápido desde Vilcún a comunas cercanas
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Relación directa y personalizada con cada cliente
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

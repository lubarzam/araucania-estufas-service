
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Settings, Package, Truck } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Instalaciones",
      description: "Instalación profesional de estufas a leña y cañones con todas las normativas de seguridad.",
      features: ["Evaluación del espacio", "Instalación completa", "Certificación", "Garantía del trabajo"]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Mantenciones",
      description: "Mantención preventiva para prolongar la vida útil de tu estufa y optimizar su rendimiento.",
      features: ["Limpieza profunda", "Revisión de componentes", "Ajustes de combustión", "Informe técnico"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Reparaciones",
      description: "Reparación especializada de estufas y cañones con repuestos originales y compatibles.",
      features: ["Diagnóstico preciso", "Repuestos de calidad", "Reparación in-situ", "Garantía en reparaciones"]
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Insumos y Kits",
      description: "Próximamente: venta de insumos, repuestos y kits completos de instalación.",
      features: ["Tubos y accesorios", "Kits de instalación", "Repuestos originales", "Asesoría técnica"],
      comingSoon: true
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Con más de 40 años de experiencia, ofrecemos servicios completos para estufas a leña
            de combustión lenta en toda la región de la Araucanía
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-lg transition-shadow ${service.comingSoon ? 'border-orange-200 bg-orange-50/50' : ''}`}>
              {service.comingSoon && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  Próximamente
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

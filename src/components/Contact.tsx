
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Necesitas instalar, mantener o reparar tu estufa a leña? 
            Estamos aquí para ayudarte con la experiencia de más de 40 años
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Solicita tu Servicio</CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos contactaremos contigo a la brevedad
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre completo
                    </label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Teléfono
                    </label>
                    <Input placeholder="+56 9 XXXX XXXX" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input placeholder="tu@email.com" type="email" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Comuna
                  </label>
                  <Input placeholder="Vilcún, Temuco, etc." />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de servicio
                  </label>
                  <select className="w-full p-3 border border-input rounded-md">
                    <option>Selecciona un servicio</option>
                    <option>Instalación de estufa nueva</option>
                    <option>Mantención preventiva</option>
                    <option>Reparación</option>
                    <option>Evaluación/Presupuesto</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Descripción del trabajo
                  </label>
                  <Textarea 
                    placeholder="Describe brevemente lo que necesitas: tipo de estufa, problema específico, ubicación en la casa, etc."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                  Enviar Solicitud
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Teléfono</div>
                    <div className="text-muted-foreground">+56 9 XXXX XXXX</div>
                    <div className="text-sm text-muted-foreground">Lunes a Sábado</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">contacto@estufasaraucania.cl</div>
                    <div className="text-sm text-muted-foreground">Respondemos en 24 hrs</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Zona de Servicio</div>
                    <div className="text-muted-foreground">Vilcún y comunas cercanas</div>
                    <div className="text-sm text-muted-foreground">Región de la Araucanía</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Horarios</div>
                    <div className="text-muted-foreground">Lun - Vie: 8:00 - 18:00</div>
                    <div className="text-muted-foreground">Sábado: 9:00 - 14:00</div>
                    <div className="text-sm text-muted-foreground">Emergencias: 24/7</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">¿Emergencia?</h3>
                <p className="mb-4 text-orange-100">
                  Para problemas urgentes con tu estufa, llamanos directamente
                </p>
                <Button variant="outline" className="border-white text-primary bg-white hover:bg-orange-50 w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

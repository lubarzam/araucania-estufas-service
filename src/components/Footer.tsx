
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔥</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Soluciones Farias</h3>
                <p className="text-gray-400 text-sm">40+ años de experiencia</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas en instalación, mantención y reparación de estufas a leña 
              de combustión lenta en la región de la Araucanía.
            </p>
            <p className="text-primary font-semibold">
              Experiencia que da confianza
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Instalaciones profesionales</li>
              <li>• Mantenciones preventivas</li>
              <li>• Reparaciones especializadas</li>
              <li>• Certificaciones de seguridad</li>
              <li>• Asesoría técnica</li>
              <li className="text-orange-300">• Insumos y kits (próximamente)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+56 9 XXXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">contacto@solucionesfarias.cl</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div className="text-gray-300">
                  <div>Vilcún y comunas cercanas</div>
                  <div className="text-sm">Región de la Araucanía, Chile</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-primary mb-2">Horarios de Atención</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Lunes a Viernes: 8:00 - 18:00</div>
                <div>Sábados: 9:00 - 14:00</div>
                <div className="text-orange-300">Emergencias: 24/7</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Soluciones Farias. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Serving the Araucanía region with excellence since 1984
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-orange-100">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+56 9 XXXX XXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>contacto@estufasaraucania.cl</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            Servicio en Vilcún y comunas cercanas
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🔥</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Estufas Araucanía</h1>
              <p className="text-sm text-muted-foreground">40+ años de experiencia</p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">
              Servicios
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors font-medium">
              Galería
            </a>
            <a href="#experiencia" className="text-foreground hover:text-primary transition-colors font-medium">
              Experiencia
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Solicitar Servicio
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-orange-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">
                Servicios
              </a>
              <a href="#galeria" className="text-foreground hover:text-primary transition-colors font-medium">
                Galería
              </a>
              <a href="#experiencia" className="text-foreground hover:text-primary transition-colors font-medium">
                Experiencia
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </a>
              <Button className="bg-primary hover:bg-primary/90 w-full">
                Solicitar Servicio
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

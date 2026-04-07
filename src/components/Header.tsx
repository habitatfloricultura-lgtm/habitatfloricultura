import { useState } from "react";
import { ShoppingBag, Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Início", "Plantas", "Decoração", "Sobre", "Contato"];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl lg:text-2xl font-bold text-primary">
            Jardim Encantado
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="relative text-foreground/70 hover:text-primary transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <Button size="sm" className="rounded-full text-xs font-semibold px-5">
            Fale no WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-primary"
            >
              {link}
            </a>
          ))}
          <Button size="sm" className="rounded-full w-full text-xs font-semibold">
            Fale no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

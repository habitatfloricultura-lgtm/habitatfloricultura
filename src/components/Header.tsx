import { useState } from "react";
import { ShoppingBag, Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleSale = () => {
    navigate("/colecao-botanica");
  };
  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Plantas", href: "#features" },
    { name: "Decoração", href: "#garden" },
    { name: "Sobre", href: "#story" },
    { name: "Contato", href: "#cta" },
  ];

  const handleWhatsApp = (product: any) => {
    const phone = import.meta.env.VITE_WHATSAPP_PHONE; // 🔴 coloque seu número com DDD (sem espaços)

    const message = `Olá! 👋
Gostaria de mais informações 🌿
Pode me ajudar?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl lg:text-2xl font-bold text-primary">
            habitat floricultura
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="relative text-foreground/70 hover:text-primary transition-colors">
            <ShoppingBag onClick={handleSale} className="h-5 w-5" />
          </button>
          <Button
            onClick={handleWhatsApp}
            size="sm"
            className="rounded-full text-xs font-semibold px-5"
          >
            Fale no WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className=" fixed lg:hidden bg-card border-t px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            size="sm"
            className="rounded-full w-full text-xs font-semibold"
          >
            Fale no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

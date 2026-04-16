import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
type Props = {
  id?: string;
};
const footerLinks = [
  {
    title: "Serviços",
    links: ["Plantas de Interior", "Paisagismo"],
    type: "internal",
  },
  {
    title: "Suporte",
    links: ["FAQ", "Envio", "Devoluções", "Consultoria"],
    type: "whatsapp",
  },
];

const Footer = ({ id }: Props) => {
  const navigate = useNavigate();

  return (
    <footer id={id} className="bg-secondary py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-secondary-foreground/80" />
              <span className="font-serif text-lg font-bold text-secondary-foreground">
                habitat Floricultura
              </span>
            </a>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed">
              Transformando espaços com a beleza da natureza desde 2015.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-secondary-foreground text-sm mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) =>
                  col.type === "internal" ? (
                    <li key={link}>
                      <button
                        onClick={() => navigate("/colecao-botanica")}
                        className="text-secondary-foreground/50 text-sm hover:text-secondary-foreground transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ) : (
                    <li key={link}>
                      <a
                        className="text-secondary-foreground/50 text-sm hover:text-secondary-foreground transition-colors"
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE}?text=${encodeURIComponent(
                          `Olá! 👋\nGostaria de mais informações 🌿\nPode me ajudar?`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-secondary-foreground/40 text-xs">
            © 2026 Habitat Floricultura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

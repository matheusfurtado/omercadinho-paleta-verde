import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown border-t border-brand-sand/10">
      <div className="container-wide section-padding py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="O Mercadinho" className="h-10 w-auto brightness-0 invert" />
            <span className="text-brand-cream text-xl font-bold">O Mercadinho</span>
          </div>

          {/* Copyright */}
          <p className="text-brand-sand/60 text-sm text-center">
            {currentYear} O Mercadinho. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#sobre" className="text-brand-sand/80 hover:text-brand-cream text-sm transition-colors">
              Sobre
            </a>
            <a href="#beneficios" className="text-brand-sand/80 hover:text-brand-cream text-sm transition-colors">
              Benefícios
            </a>
            <a href="#contato" className="text-brand-sand/80 hover:text-brand-cream text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

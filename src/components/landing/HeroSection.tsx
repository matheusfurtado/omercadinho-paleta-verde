import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/mercadinho-1.jpeg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5548988684880?text=Olá! Gostaria de saber mais sobre O Mercadinho para meu condomínio/empresa.";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/80 to-brand-brown/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide w-full section-padding">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="O Mercadinho" className="h-14 w-auto brightness-0 invert" />
            <span className="text-brand-cream text-2xl font-bold">O Mercadinho</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-cream leading-tight mb-6">
            Seu minimercado inteligente, 
            <span className="text-brand-yellow"> disponível 24 horas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-brand-sand/90 mb-10 leading-relaxed max-w-xl">
            A solução completa para condomínios e empresas que desejam oferecer conveniência 
            e praticidade sem complicações. Instalação simplificada e operação autônoma.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-brown font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-brand-yellow/30 transition-all hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale conosco no WhatsApp
              </a>
            </Button>

            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-brand-cream bg-brand-cream text-brand-brown hover:bg-brand-cream/90 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              <a href="#contato">
                Solicitar proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust badge */}
          <div className="mt-12 flex items-center gap-2 text-brand-sand/70">
            <div className="w-2 h-2 rounded-full bg-brand-green-light animate-pulse" />
            <span className="text-sm">Instalação sem custo de obra para o condomínio</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

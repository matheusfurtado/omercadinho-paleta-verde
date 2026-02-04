import { MessageCircle, FileCheck, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Entre em contato",
    description: "Fale conosco pelo WhatsApp ou formulário e conte sobre o seu espaço e necessidades."
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Avaliação do local",
    description: "Nossa equipe analisa o espaço disponível e apresenta a proposta mais adequada."
  },
  {
    icon: Wrench,
    number: "03",
    title: "Instalação",
    description: "Realizamos toda a montagem e configuração do mercadinho de forma rápida e organizada."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Funcionamento",
    description: "O Mercadinho começa a operar 24 horas com nossa gestão completa."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-primary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-brand-cream/20 text-brand-cream font-semibold text-sm rounded-full mb-6">
            Processo
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream mb-6">
            Como funciona <span className="text-brand-yellow">na prática</span>
          </h2>
          
          <p className="text-lg text-brand-sand/80">
            Um processo simples e transparente, da primeira conversa até o funcionamento completo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-brand-sand/30" />
                )}
                
                <div className="text-center">
                  {/* Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-brand-yellow flex items-center justify-center mx-auto">
                      <Icon className="w-10 h-10 text-brand-brown" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-cream rounded-full flex items-center justify-center text-brand-brown font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-cream mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-sand/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

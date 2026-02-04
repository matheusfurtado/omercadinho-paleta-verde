import { ArrowRight } from "lucide-react";
import mercadinhoImg from "@/assets/mercadinho-5.jpeg";

const steps = [
  {
    number: "1",
    title: "Contato inicial",
    description: "Você entra em contato e compartilha informações sobre o espaço disponível."
  },
  {
    number: "2",
    title: "Visita técnica",
    description: "Nossa equipe visita o local para avaliar as condições e definir a melhor configuração."
  },
  {
    number: "3",
    title: "Proposta personalizada",
    description: "Elaboramos uma proposta sob medida para as necessidades do seu espaço."
  },
  {
    number: "4",
    title: "Instalação e inauguração",
    description: "Realizamos toda a montagem e deixamos o mercadinho pronto para funcionar."
  }
];

const NextStepsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-yellow/20 to-primary/20 rounded-3xl blur-2xl" />
            <img 
              src={mercadinhoImg} 
              alt="O Mercadinho instalado"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
              Implantação
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Próximos passos para ter 
              <span className="text-primary"> O Mercadinho</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Um processo simples e transparente, com acompanhamento em todas as etapas.
            </p>

            {/* Steps list */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-brand-brown">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 mt-10 text-primary font-semibold hover:underline"
            >
              Iniciar agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;

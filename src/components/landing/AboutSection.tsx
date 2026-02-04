import mercadinhoImage from "@/assets/mercadinho-2.jpeg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
              Sobre O Mercadinho
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Uma nova forma de oferecer 
              <span className="text-primary"> conveniência</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O Mercadinho é um minimercado inteligente que funciona 24 horas por dia, 
              7 dias por semana, sem necessidade de funcionários no local. Oferecemos 
              uma solução completa para espaços que desejam proporcionar praticidade 
              aos seus moradores ou colaboradores.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Com produtos selecionados, tecnologia intuitiva e operação segura, 
              transformamos espaços ociosos em pontos de conveniência que geram 
              valor para todos.
            </p>

            {/* Key points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Funcionamento 24 horas",
                "Sem necessidade de funcionários",
                "Instalação simplificada",
                "Curadoria de produtos"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img 
                src={mercadinhoImage} 
                alt="Interior do O Mercadinho com prateleiras organizadas"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-brown px-6 py-4 rounded-2xl shadow-xl">
                <span className="text-3xl font-extrabold">24h</span>
                <p className="text-sm font-semibold">Disponível sempre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

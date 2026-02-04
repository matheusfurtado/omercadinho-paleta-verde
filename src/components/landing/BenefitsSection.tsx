import { Clock, Users, Settings, Shield, Zap, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Disponibilidade total",
    description: "Funciona 24 horas por dia, todos os dias do ano, oferecendo conveniência a qualquer momento."
  },
  {
    icon: Users,
    title: "Operação autônoma",
    description: "Não requer funcionários no local. O sistema de autoatendimento é intuitivo e seguro."
  },
  {
    icon: Settings,
    title: "Instalação simplificada",
    description: "Adaptamos o espaço disponível sem necessidade de obras complexas ou altos investimentos."
  },
  {
    icon: Shield,
    title: "Segurança integrada",
    description: "Sistema de monitoramento e controle de acesso para garantir a integridade do espaço."
  },
  {
    icon: Zap,
    title: "Gestão descomplicada",
    description: "Toda a operação, reposição e manutenção são de nossa responsabilidade."
  },
  {
    icon: TrendingUp,
    title: "Valorização do espaço",
    description: "Transforma áreas ociosas em um diferencial competitivo para o seu empreendimento."
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-card">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
            Vantagens
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher <span className="text-primary">O Mercadinho</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Uma solução pensada para simplificar a gestão e maximizar a conveniência 
            para todos os envolvidos.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-yellow/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-brand-brown" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

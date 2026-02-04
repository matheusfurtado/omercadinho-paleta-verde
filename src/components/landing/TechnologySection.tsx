import { ShoppingBag, Smartphone, Lock, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: ShoppingBag,
    title: "Produtos selecionados",
    description: "Curadoria cuidadosa com itens de primeira necessidade, snacks, bebidas e conveniências do dia a dia."
  },
  {
    icon: Smartphone,
    title: "Tecnologia intuitiva",
    description: "Sistema de autoatendimento simples e acessível para todas as idades e perfis de usuários."
  },
  {
    icon: Lock,
    title: "Operação segura",
    description: "Controle de acesso, monitoramento por câmeras e sistema antifraude integrado."
  },
  {
    icon: BarChart3,
    title: "Gestão inteligente",
    description: "Reposição automática, controle de validade e análise de consumo para otimização contínua."
  }
];

const TechnologySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
            Nossa estrutura
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Curadoria e <span className="text-primary">tecnologia</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Quatro pilares que sustentam a excelência da operação do O Mercadinho.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

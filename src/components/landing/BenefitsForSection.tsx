import { Building2, Briefcase } from "lucide-react";

const forManagers = [
  "Valorização do empreendimento",
  "Diferencial competitivo no mercado",
  "Sem custo de operação para a gestão",
  "Instalação rápida e sem transtornos",
  "Relatórios de uso disponíveis"
];

const forUsers = [
  "Compras a qualquer hora",
  "Praticidade no dia a dia",
  "Produtos essenciais sempre disponíveis",
  "Pagamento digital simplificado",
  "Economia de tempo e deslocamento"
];

const BenefitsForSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For managers */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-lg border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Para gestores e síndicos
                </h3>
                <p className="text-muted-foreground">
                  Benefícios para quem administra
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {forManagers.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For users */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-lg border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Para quem utiliza
                </h3>
                <p className="text-muted-foreground">
                  Benefícios para moradores e colaboradores
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {forUsers.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsForSection;

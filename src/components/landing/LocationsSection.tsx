import condominioImg from "@/assets/mercadinho-4.jpeg";
import empresaImg from "@/assets/mercadinho-6.jpeg";
import corporativoImg from "@/assets/mercadinho-3.jpeg";
import circulacaoImg from "@/assets/mercadinho-7.jpeg";

const locations = [
  {
    title: "Condomínios residenciais",
    description: "Praticidade para moradores a qualquer hora do dia ou da noite.",
    image: condominioImg
  },
  {
    title: "Empresas e escritórios",
    description: "Conveniência para colaboradores sem sair do ambiente de trabalho.",
    image: empresaImg
  },
  {
    title: "Espaços corporativos",
    description: "Solução integrada para complexos comerciais e centros empresariais.",
    image: corporativoImg
  },
  {
    title: "Ambientes de alta circulação",
    description: "Atendimento rápido em locais com grande fluxo de pessoas.",
    image: circulacaoImg
  }
];

const LocationsSection = () => {
  return (
    <section id="locais" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
            Aplicações
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Onde O Mercadinho <span className="text-primary">se encaixa</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Espaços diversos podem se beneficiar de um minimercado inteligente. 
            Conheça as principais aplicações.
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
            >
              <img 
                src={location.image} 
                alt={location.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-cream mb-2">
                  {location.title}
                </h3>
                <p className="text-brand-sand/90 text-sm md:text-base">
                  {location.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

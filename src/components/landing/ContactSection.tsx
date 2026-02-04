import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  company: z.string().trim().max(150, "Nome da empresa muito longo").optional(),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa")
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const whatsappLink = "https://wa.me/5548988684880?text=Olá! Gostaria de saber mais sobre O Mercadinho para meu condomínio/empresa.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulating form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-brand-brown">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left side - Text */}
          <div className="lg:col-span-2">
            <span className="inline-block px-4 py-2 bg-brand-cream/20 text-brand-cream font-semibold text-sm rounded-full mb-6">
              Fale conosco
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream mb-6 leading-tight">
              Pronto para ter 
              <span className="text-brand-yellow"> O Mercadinho</span>?
            </h2>
            
            <p className="text-lg text-brand-sand/80 mb-10">
              Entre em contato pelo WhatsApp para uma resposta rápida ou preencha 
              o formulário para receber uma proposta personalizada.
            </p>

            {/* WhatsApp CTA */}
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/90 text-brand-brown font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-brand-yellow/30 mb-10"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale pelo WhatsApp
              </a>
            </Button>

            {/* Contact info */}
            <div className="space-y-4 pt-6 border-t border-brand-sand/20">
              <div className="flex items-center gap-3 text-brand-sand/80">
                <Phone className="w-5 h-5 text-brand-yellow" />
                <span>(48) 98868-4880</span>
              </div>
              <div className="flex items-center gap-3 text-brand-sand/80">
                <Mail className="w-5 h-5 text-brand-yellow" />
                <span>omercadinhofloripa@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-brand-sand/80">
                <MapPin className="w-5 h-5 text-brand-yellow" />
                <span>Florianópolis, SC e região</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Solicitar proposta
              </h3>

              <div className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Seu telefone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`h-12 ${errors.phone ? 'border-destructive' : ''}`}
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Input
                    name="company"
                    placeholder="Nome do condomínio ou empresa (opcional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Conte um pouco sobre o espaço e suas necessidades..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-xl"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

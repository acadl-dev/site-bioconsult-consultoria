import { Button } from "@/components/ui/button"
import {
  Code,
  Database,
  Globe,
  HeartPulse,
  Laptop,
  LayoutGrid,
  MessageSquare,
  Search,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import BenefitItem from "@/components/benefit-item"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-[#003366]" />
            <span className="text-xl font-bold text-[#003366]">BioConsult</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#beneficios" className="text-sm font-medium hover:text-[#336699] transition-colors">
              Benefícios
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-[#336699] transition-colors">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-[#336699] transition-colors">
              Depoimentos
            </Link>
          </nav>
          <Link href="#contato">
            <Button className="bg-[#003366] hover:bg-[#002244]">Fale Comigo</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-52 bg-[#E5E5E5]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#336699]/10 px-3 py-1 text-sm text-[#003366]">
                  Desenvolvimento Web Especializado
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#003366]">
                  Consultoria especializada para empresas biomédicas
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Soluções estratégicas que impulsionam o crescimento e a inovação no setor biomédico, com expertise
                  comprovada e resultados mensuráveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="#contato">
                    <Button className="bg-[#003366] hover:bg-[#002244] text-white">Veja como posso ajudar</Button>
                  </Link>
                  <Link href="#servicos">
                    <Button variant="outline" className="border-[#336699] text-[#336699] bg-transparent">
                      Nossos serviços
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#336699]/10 rounded-full blur-xl" />
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#003366]/10 rounded-full blur-xl" />
                  <Image
                    src="/img001.png?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Mockup de site institucional biomédico"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#336699]/10 px-3 py-1 text-sm text-[#003366]">
                  Por que investir em um site profissional?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003366]">
                  Benefícios para sua empresa biomédica
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Um site institucional bem desenvolvido é essencial para transmitir confiança e profissionalismo no
                  setor biomédico.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <BenefitItem
                icon={<Shield className="h-10 w-10 text-[#003366]" />}
                title="Credibilidade e confiança"
                description="Transmita profissionalismo e ganhe a confiança de potenciais clientes com um site que reflete a excelência de seus serviços biomédicos."
              />
              <BenefitItem
                icon={<Search className="h-10 w-10 text-[#003366]" />}
                title="Visibilidade nos buscadores"
                description="Seja encontrado por quem procura seus serviços com um site otimizado para os mecanismos de busca (SEO)."
              />
              <BenefitItem
                icon={<Smartphone className="h-10 w-10 text-[#003366]" />}
                title="Experiência responsiva"
                description="Site adaptado para todos os dispositivos, garantindo uma experiência perfeita em desktops, tablets e smartphones."
              />
              <BenefitItem
                icon={<LayoutGrid className="h-10 w-10 text-[#003366]" />}
                title="Apresentação clara dos serviços"
                description="Estrutura organizada que facilita a compreensão dos serviços oferecidos pela sua empresa de assessoria biomédica."
              />
              <BenefitItem
                icon={<MessageSquare className="h-10 w-10 text-[#003366]" />}
                title="Comunicação eficiente"
                description="Canais de contato integrados que facilitam a comunicação com potenciais clientes e parceiros."
              />
              <BenefitItem
                icon={<Sparkles className="h-10 w-10 text-[#003366]" />}
                title="Diferenciação no mercado"
                description="Destaque-se da concorrência com um design exclusivo e alinhado com as tendências do setor biomédico."
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-[#E5E5E5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#336699]/10 px-3 py-1 text-sm text-[#003366]">
                  O que ofereço
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003366]">
                  Serviços especializados
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desenvolvimento web focado nas necessidades específicas de empresas do setor biomédico.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <ServiceCard
                icon={<Laptop className="h-10 w-10 text-[#003366]" />}
                title="Design institucional exclusivo"
                description="Criação de interfaces modernas e profissionais que refletem a identidade da sua empresa biomédica."
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10 text-[#003366]" />}
                title="Performance otimizada"
                description="Sites rápidos e eficientes que garantem uma experiência fluida para seus visitantes."
              />
              <ServiceCard
                icon={<Search className="h-10 w-10 text-[#003366]" />}
                title="SEO básico integrado"
                description="Otimização para mecanismos de busca, aumentando a visibilidade da sua empresa online."
              />
              <ServiceCard
                icon={<Database className="h-10 w-10 text-[#003366]" />}
                title="Painel administrativo intuitivo"
                description="Sistema de gerenciamento de conteúdo fácil de usar para atualizar informações sem conhecimento técnico."
              />
              <ServiceCard
                icon={<Code className="h-10 w-10 text-[#003366]" />}
                title="Código limpo e escalável"
                description="Desenvolvimento com as melhores práticas, garantindo facilidade de manutenção e expansão futura."
              />
              <ServiceCard
                icon={<MessageSquare className="h-10 w-10 text-[#003366]" />}
                title="Suporte técnico por 30 dias"
                description="Acompanhamento pós-lançamento para garantir o funcionamento perfeito do seu site."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32 bg-[#E5E5E5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#336699]/10 px-3 py-1 text-sm text-[#003366]">
                  O que dizem sobre meu trabalho
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003366]">
                  Depoimentos de clientes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A satisfação dos meus clientes é o melhor indicador da qualidade do meu trabalho.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="O site desenvolvido superou todas as nossas expectativas. Profissionalismo, pontualidade e excelente comunicação durante todo o processo."
                author="Dra. Mariana Silva"
                role="Diretora de Pesquisa, BioLab"
                rating={5}
              />
              <TestimonialCard
                quote="Nosso site ficou exatamente como imaginávamos. O conhecimento técnico aliado à compreensão das particularidades do setor biomédico fez toda a diferença."
                author="Dr. Carlos Mendes"
                role="CEO, MedTech Devices"
                rating={5}
              />
              <TestimonialCard
                quote="Desde o lançamento do novo site, observamos um aumento significativo nos contatos qualificados. O investimento valeu cada centavo."
                author="Patrícia Oliveira"
                role="Marketing, PharmaSolutions"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003366]">
                  Pronto para transformar sua presença online?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vamos conversar sobre como posso ajudar sua empresa de assessoria biomédica a se destacar na web.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="grid gap-4">
                  <Link href="https://wa.me/5500000000000" target="_blank">
                    <Button className="w-full bg-[#003366] hover:bg-[#002244] text-white">Fale comigo agora</Button>
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Ou envie um email para{" "}
                    <Link href="mailto:contato@biodev.com.br" className="text-[#336699] underline underline-offset-2">
                      contato@biodev.com.br
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fixed Social Buttons */}
        <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
          <Link
            href="https://wa.me/5584991554520?text=Olá, Ailton! Estava vendo seus projetos e gostaria de saber mais sobre seus serviços."
            target="_blank"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          >
            {/* <MessageSquare className="h-6 w-6" /> */}
            <Image
                    src="/img002.png?height=6&width=8"
                    width={38}
                    height={36}
                    alt="Mockup de site institucional biomédico"
                    className="rounded-lg shadow-xl relative z-10"
                  />
            <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#222222] px-3 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Fale conosco no WhatsApp
            </span>
          </Link>
          <Link
            href="https://instagram.com/ailton.cdl"
            target="_blank"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#222222] px-3 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Siga no Instagram
            </span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-[#003366]" />
            <span className="text-lg font-semibold text-[#003366]">BioConsult</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BioConsult - Consultoria Especializada em Empresas Biomédicas
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-[#336699]">
              LinkedIn
            </Link>
            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-[#336699]">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

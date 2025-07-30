import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, LayoutGrid, Search, Database, Shield, Sparkles } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="p-2 w-fit rounded-full bg-[#336699]/10 mb-2">{icon}</div>
        <CardTitle className="text-[#003366]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

// Usage of ServiceCard component
function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ServiceCard
        icon={<HeartPulse className="h-10 w-10 text-[#003366]" />}
        title="Consultoria Regulatória"
        description="Orientação especializada para conformidade com ANVISA, FDA e outras agências regulatórias internacionais."
      />
      <ServiceCard
        icon={<LayoutGrid className="h-10 w-10 text-[#003366]" />}
        title="Gestão de Qualidade"
        description="Implementação de sistemas de qualidade ISO 13485, boas práticas de fabricação e validação de processos."
      />
      <ServiceCard
        icon={<Search className="h-10 w-10 text-[#003366]" />}
        title="Pesquisa e Desenvolvimento"
        description="Suporte em projetos de P&D, desde a concepção até a comercialização de produtos biomédicos."
      />
      <ServiceCard
        icon={<Database className="h-10 w-10 text-[#003366]" />}
        title="Análise de Mercado"
        description="Estudos de viabilidade, análise competitiva e estratégias de entrada em novos mercados."
      />
      <ServiceCard
        icon={<Shield className="h-10 w-10 text-[#003366]" />}
        title="Gestão de Riscos"
        description="Identificação, avaliação e mitigação de riscos em produtos e processos biomédicos."
      />
      <ServiceCard
        icon={<Sparkles className="h-10 w-10 text-[#003366]" />}
        title="Inovação Estratégica"
        description="Desenvolvimento de estratégias de inovação e transformação digital para o setor biomédico."
      />
    </div>
  )
}

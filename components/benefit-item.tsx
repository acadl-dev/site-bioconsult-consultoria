import type { ReactNode } from "react"

interface BenefitItemProps {
  icon: ReactNode
  title: string
  description: string
}

export default function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg transition-all hover:bg-[#336699]/5">
      <div className="p-2 rounded-full bg-[#336699]/10">{icon}</div>
      <h3 className="text-xl font-bold text-[#222222]">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

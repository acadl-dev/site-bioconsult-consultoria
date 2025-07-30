import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface PortfolioItemProps {
  imageSrc: string
  title: string
  description: string
}

export default function PortfolioItem({ imageSrc, title, description }: PortfolioItemProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-[#003366]">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href="#" className="text-sm text-[#336699] hover:underline underline-offset-2">
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  )
}

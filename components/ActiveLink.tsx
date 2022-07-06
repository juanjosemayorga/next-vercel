import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react"

// Cada vez que el componente sea renderizado este objeto se va a volver
// a generar si está dentro del componente, por eso es mejor que esté
// afuera del componente
const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
}

interface Props {
  text: string;
  href: string;
}

export const ActiveLink = ({ text, href }: Props) => {

  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  )
}

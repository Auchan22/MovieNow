interface Props {
  params: { id: string }
}

export default function MoviePage({ params }: Props) {
  return <h1>hola desde pagina de peli con id: {params.id}</h1>
}

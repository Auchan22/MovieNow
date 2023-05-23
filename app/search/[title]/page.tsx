"use client"

import { useMulti } from "@/hooks"

import { GridCard } from "@/components/grid-card"

interface Props {
  params: { title: string }
}

export default function SearchPage({ params }: Props) {
  const { title: search } = params
  const title = search.replaceAll("%20", " ")
  const { multiQuery } = useMulti({ title })
  return (
    <div className="min-w-screen flex min-h-[80vh] flex-col items-center justify-center">
      <h1 className="my-10 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Encontrá tu pelicula!
      </h1>
      {multiQuery.isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <GridCard data={multiQuery.data || []} />
      )}
    </div>
  )
}

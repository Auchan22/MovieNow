"use client"

import { useMovies } from "@/hooks"

import { GridCard } from "@/components/grid-card"

export default function MoviesPage() {
  const { moviesQuery } = useMovies()
  // console.log(moviesQuery.data)

  return (
    <div className="min-w-screen flex min-h-[80vh] flex-col items-center justify-center">
      <h1 className="my-10 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Encontrá tu pelicula!
      </h1>
      {moviesQuery.isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <GridCard data={moviesQuery.data || []} />
      )}
    </div>
  )
}

"use client"

import { useEffect } from "react"
import { useMovies } from "@/hooks"
import { genreAtom } from "@/store/myStore"
import { useAtom } from "jotai"

import { GridCard } from "@/components/grid-card"

export default function MoviesPage() {
  // console.log(moviesQuery.data)
  const [genre_id] = useAtom(genreAtom)
  useEffect(() => {
    console.log("Cambio de genero desde movie: ", genre_id)
  }, [genre_id])

  const { moviesQuery } = useMovies({ genre_id })

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

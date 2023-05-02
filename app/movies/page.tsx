"use client"

import { useMovies } from "@/hooks"

export default function MoviesPage() {
  const { moviesQuery } = useMovies()
  // console.log(moviesQuery.data)
  return <div>Hola mundo</div>
}

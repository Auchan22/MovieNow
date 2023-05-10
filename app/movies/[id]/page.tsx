"use client"

import { useMovie } from "@/hooks"

interface Props {
  params: { id: string }
}

export default function MoviePage({ params }: Props) {
  const { data, isLoading } = useMovie(params.id).movieQuery

  if (isLoading) return <h1>Cargando</h1>
  return (
    <div className="h-screen w-screen">
      <div className="relative h-[70%] bg-gradient-to-b from-red-500 shadow-md">
        <img
          src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          width="100%"
          className="absolute max-h-[100%] "
        />
        <h1 className="absolute top-0 min-h-full w-full backdrop-blur-sm">
          {data?.title}
        </h1>
      </div>
    </div>
  )
}

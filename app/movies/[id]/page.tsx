"use client"

import { useState } from "react"
import { useMovie } from "@/hooks"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { GridActores } from "@/components/grid-actores"
import { Icons } from "@/components/icons"
import { LikeButton } from "@/components/like-button"

interface Props {
  params: { id: string }
}

export default function MoviePage({ params }: Props) {
  const { data, isLoading } = useMovie(params.id).movieQuery
  const { data: cast } = useMovie(params.id).castQuery
  const [isAdded, setIsAdded] = useState<boolean>(false)

  if (isLoading) return <h1>Cargando</h1>
  return (
    <div className="mx-5 my-4 min-h-min max-w-full sm:mx-auto">
      <div className="min-h-screen grid-flow-col justify-center gap-4 md:mx-14 md:grid md:grid-cols-3">
        <div className="col-span-2 col-start-1 col-end-3 my-auto max-w-[80%]  md:pl-5">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {data?.title}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            {data?.overview}
          </p>
          <div className="mt-3 flex w-full items-center justify-start gap-5">
            <LikeButton
              handleClick={() => setIsAdded(!isAdded)}
              isClicked={isAdded}
              prompt={true}
            />
            <div className="flex gap-4 py-2">
              <Icons.vote />
              <p
                className={cn(
                  "font-bold",
                  data?.vote_average! >= 7 ? "text-green-700" : "text-red-700"
                )}
              >
                {data?.vote_average.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
        <img
          className="my-4 h-[80vh] rounded-sm "
          src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        />
      </div>
      <div className="md:mx-14">
        <h3 className="text-lg font-bold leading-tight tracking-tighter sm:text-3xl md:text-2xl lg:text-3xl">
          Actores
        </h3>
        <Separator />
        <GridActores data={cast!} />
      </div>
    </div>
  )
}

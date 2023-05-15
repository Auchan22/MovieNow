import { useState } from "react"
import { useRouter } from "next/navigation"
import { Movie } from "@/interfaces/Movie"
import { useQueryClient } from "@tanstack/react-query"

import { cn } from "@/lib/utils"
import { getMovieInfo } from "@/hooks/useMovie"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LikeButton } from "@/components/like-button"

import { Icons } from "./icons"

interface Props {
  data: Movie
}

export function MovieCard({ data }: Props) {
  const [isAdded, setIsAdded] = useState<boolean>(false)
  const queryClient = useQueryClient()

  const router = useRouter()

  const presetData = () => {
    queryClient.prefetchQuery(["movie", data.id], () =>
      getMovieInfo(data.id.toString())
    )
  }
  return (
    <Card className="w-[350px]" onMouseEnter={presetData}>
      <CardHeader>
        <img
          src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className="rounded-sm"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{data.title}</CardTitle>
        {/* <CardDescription>{data.tagline}</CardDescription> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <LikeButton
          handleClick={() => setIsAdded(!isAdded)}
          isClicked={isAdded}
          prompt={false}
        />
        <Button onClick={() => router.push(`/movies/${data.id}`)}>
          Ver Más
        </Button>
      </CardFooter>
    </Card>
  )
}

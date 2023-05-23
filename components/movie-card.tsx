import { useState } from "react"
import { useRouter } from "next/navigation"
import { MediaType, Movie, Multi } from "@/interfaces/Movie"
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
  data: Movie & Multi
}

export function MovieCard({ data }: Props) {
  const [isAdded, setIsAdded] = useState<boolean>(false)
  const queryClient = useQueryClient()

  const router = useRouter()

  const redirect = () => {
    if (data.media_type == MediaType.Movie) router.push(`/movies/${data.id}`)
    if (data.media_type == MediaType.Tv) router.push(`series/${data.id}`)
  }

  const presetData = () => {
    if (data.media_type === MediaType.Movie) {
      queryClient.prefetchQuery(["movie", data.id], () =>
        getMovieInfo(data.id.toString())
      )
    }
    //Todo: Hacer function getSerieInfo y hook
    // if(data.media_type === MediaType.Tv){
    //   queryClient.prefetchQuery(["serie", data.id], () =>
    //     getSerieInfo(data.id.toString())
    //   )
    // }
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
        <Button onClick={redirect}>Ver Más</Button>
      </CardFooter>
    </Card>
  )
}

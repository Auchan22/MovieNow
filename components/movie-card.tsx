import { useState } from "react"
import { Movie } from "@/interfaces/Movie"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "./icons"

interface Props {
  data: Movie
}

export function MovieCard({ data }: Props) {
  const [isAdded, setIsAdded] = useState<boolean>(false)
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <img
          src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className="rounded-sm"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.overview}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={() => setIsAdded(!isAdded)}>
          <Icons.outlinedHeart
            stroke={isAdded ? "red" : "#fff"}
            fill={isAdded ? "red" : "transparent"}
            className={cn(
              "transition delay-150 ease-in",
              isAdded && "animate-float"
            )}
          />
        </Button>
        <Button>Ver Más</Button>
      </CardFooter>
    </Card>
  )
}

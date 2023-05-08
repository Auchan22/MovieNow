import { Movie } from "@/interfaces/Movie"

import { MovieCard } from "./movie-card"

interface Props {
  data: Movie[]
}

export function GridCard({ data }: Props) {
  return (
    <div className="mx-8 flex max-w-max flex-row flex-wrap items-start justify-center gap-5  py-4">
      {data.map((item) => (
        <MovieCard data={item} key={item.id} />
      ))}
    </div>
  )
}

import { Movie } from "@/interfaces/Movie"
import { useQuery } from "@tanstack/react-query"

import { movieAPI } from "@/lib/movieAPI"

interface Props {
  genre_id?: string
}

const getMovies = async ({ genre_id = "0" }: Props): Promise<Movie[]> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")
  if (genre_id != "0") {
    params.append("genre_ids", genre_id)
  }

  const { data } = await movieAPI.get<{ results: Movie[] }>("/popular", {
    params,
  })

  if (genre_id != "0") {
    return data.results.filter((m) => m.genre_ids.includes(+genre_id))
  }

  return data.results
}

export const useMovies = ({ genre_id }: Props) => {
  const moviesQuery = useQuery({
    queryKey: ["movies", { genre_id }],
    queryFn: () => getMovies({ genre_id }),
  })

  return { moviesQuery }
}

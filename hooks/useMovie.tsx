import { Movie, MovieCast } from "@/interfaces/Movie"
import { useQuery } from "@tanstack/react-query"

import { movieAPI } from "@/lib/movieAPI"

interface Props {
  movie_id?: string
}

export const getMovieInfo = async (movie_id: string = "0"): Promise<Movie> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")

  const { data } = await movieAPI.get<Movie>(`/${movie_id}`, {
    params,
  })

  return data
}

export const getCast = async (movie_id: string = "0"): Promise<MovieCast> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")

  const { data } = await movieAPI.get<MovieCast>(`/${movie_id}/credits`, {
    params,
  })

  return data
}

export const useMovie = (movie_id: string) => {
  const movieQuery = useQuery({
    queryKey: ["movie", movie_id],
    queryFn: () => getMovieInfo(movie_id),
  })

  const castQuery = useQuery({
    queryKey: ["movie", movie_id, "cast"],
    queryFn: () => getCast(movieQuery.data?.id.toString()),
    enabled: movieQuery.data !== undefined,
  })

  return { movieQuery, castQuery }
}

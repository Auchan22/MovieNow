import { Movie } from "@/interfaces/Movie"
import { useQuery } from "@tanstack/react-query"

import { movieAPI } from "@/lib/movieAPI"

const getMovies = async (): Promise<Movie[]> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")

  const { data } = await movieAPI.get("/popular", { params })

  return data.results
}

export const useMovies = () => {
  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  })

  return { moviesQuery }
}

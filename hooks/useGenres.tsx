import { Genre } from "@/interfaces/Movie"
import { useQuery } from "@tanstack/react-query"

import { genreAPI } from "@/lib/movieAPI"

const getGenres = async (): Promise<Genre[]> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")

  const { data } = await genreAPI.get<{ genres: Genre[] }>("/list", { params })

  return data.genres
}

export const useGenres = () => {
  const genresQuery = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  })

  return { genresQuery }
}

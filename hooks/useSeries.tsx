import { Movie } from "@/interfaces/Movie"
import { Serie } from "@/interfaces/Serie"
import { useQuery } from "@tanstack/react-query"

import { movieAPI, serieAPI } from "@/lib/movieAPI"

interface Props {
  genre_id?: string
}

const getSeries = async ({ genre_id = "0" }: Props): Promise<Serie[]> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")
  if (genre_id != "0") {
    params.append("genre_ids", genre_id)
  }

  const { data } = await serieAPI.get<{ results: Serie[] }>("/top_rated", {
    params,
  })

  if (genre_id != "0") {
    return data.results.filter((m) =>
      m.genres.filter((g) => g.id === +genre_id)
    )
  }

  // console.log(data.results)
  return data.results
}

export const useSeries = ({ genre_id }: Props) => {
  const seriesQuery = useQuery({
    queryKey: ["series", { genre_id }],
    queryFn: () => getSeries({ genre_id }),
  })

  return { seriesQuery }
}

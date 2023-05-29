import { Serie, SerieCast } from "@/interfaces/Serie"
import { useQuery } from "@tanstack/react-query"

import { serieAPI } from "@/lib/movieAPI"

interface Props {
  serie_id?: string
}

export const getSerieInfo = async (serie_id: string = "0"): Promise<Serie> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")

  const { data } = await serieAPI.get<Serie>(`/${serie_id}`, {
    params,
  })

  return data
}

export const getCast = async (serie_id: string = "0"): Promise<SerieCast> => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")

  const { data } = await serieAPI.get<SerieCast>(`/${serie_id}/credits`, {
    params,
  })

  return data
}

export const useSerie = (movie_id: string) => {
  const serieQuery = useQuery({
    queryKey: ["serie", movie_id],
    queryFn: () => getSerieInfo(movie_id),
  })

  const castQuery = useQuery({
    queryKey: ["serie", movie_id, "cast"],
    queryFn: () => getCast(serieQuery.data?.id.toString()),
    enabled: serieQuery.data !== undefined,
  })

  return { serieQuery, castQuery }
}

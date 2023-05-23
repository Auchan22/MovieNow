import { Movie, Multi } from "@/interfaces/Movie"
import { useQuery } from "@tanstack/react-query"

import { multiAPI } from "@/lib/movieAPI"

interface Props {
  title: string
}

const getMultiInfo = async ({ title = "" }: Props) => {
  const params = new URLSearchParams()
  params.append("api_key", "be934688ba6c1856089a458a930fc778")
  params.append("language", "es-ES")

  if (title != "") {
    params.append("query", title)
  }

  const { data } = await multiAPI.get<{ results: (Multi & Movie)[] }>("", {
    params,
  })
  return data.results
}

export const useMulti = ({ title }: Props) => {
  const multiQuery = useQuery({
    queryKey: ["multi", { title }],
    queryFn: () => getMultiInfo({ title }),
  })

  return { multiQuery }
}

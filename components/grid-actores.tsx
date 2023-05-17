import { MovieCast } from "@/interfaces/Movie"

import { ActorCard } from "@/components/actor-card"

interface Props {
  data: MovieCast
}

export function GridActores({ data }: Props) {
  return (
    <div className="mx-8 flex max-w-max flex-row flex-wrap items-start justify-center gap-5  py-4">
      {data?.cast.map((el) => (
        <ActorCard data={el} key={el.id} />
      ))}
    </div>
  )
}

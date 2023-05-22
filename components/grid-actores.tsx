import { Department, MovieCast } from "@/interfaces/Movie"

import { ActorCard } from "@/components/actor-card"

interface Props {
  data: MovieCast
}

export function GridActores({ data }: Props) {
  const arr = data?.cast
    .filter((e) => e.known_for_department === Department.Acting)
    .slice(0, 18)
  return (
    <div className="mx-8 flex max-w-max flex-row flex-wrap items-start justify-center gap-5  py-4">
      {arr?.map((el) => (
        <ActorCard data={el} key={el.id} />
      ))}
    </div>
  )
}

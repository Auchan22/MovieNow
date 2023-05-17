import { Cast } from "@/interfaces/Movie"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  data: Cast
}

export function ActorCard({ data }: Props) {
  return (
    <Card className="w-[200px]">
      <CardHeader>
        <img
          src={`http://image.tmdb.org/t/p/w500/${data.profile_path}`}
          alt={data.name}
          className="rounded-sm"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="font-bold">{data.name}</CardTitle>
        {/* <CardDescription>{data.tagline}</CardDescription> */}
      </CardContent>
    </Card>
  )
}

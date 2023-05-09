import React from "react"
import { useGenres } from "@/hooks"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  items: string[]
}

export function SelectGenre({ items }: Props) {
  const { genresQuery } = useGenres()
  return (
    <div className="mx-8 flex gap-6">
      <Select onValueChange={(v) => console.log(v)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Genero" />
        </SelectTrigger>
        <SelectContent>
          {genresQuery.data?.map((item) => (
            <SelectItem value={item.name.toLowerCase()} key={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

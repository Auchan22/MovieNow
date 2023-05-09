import React from "react"
import { useGenres } from "@/hooks"
import { genreAtom } from "@/store/myStore"
import { useAtom } from "jotai"

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
  const [genre, setGenre] = useAtom(genreAtom)
  return (
    <div className="mx-8 flex gap-6">
      <Select onValueChange={(v) => setGenre(v)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Genero" />
        </SelectTrigger>
        <SelectContent>
          {genresQuery.data?.map((item) => (
            <SelectItem value={item.id.toString()} key={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

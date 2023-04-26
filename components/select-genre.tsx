import React from "react"

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
  return (
    <div className="mx-8 flex gap-6">
      <Select onValueChange={(v) => console.log(v)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Genero" />
        </SelectTrigger>
        <SelectContent>
          {items?.map((item, idx) => (
            <SelectItem value={item.toLowerCase()} key={idx}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

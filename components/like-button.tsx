import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Icons } from "./icons"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void
  isClicked: boolean
  prompt?: boolean
}

export function LikeButton({
  handleClick,
  isClicked,
  prompt = false,
  ...props
}: Props) {
  return (
    <Button {...props} variant="ghost" onClick={() => handleClick()}>
      <Icons.outlinedHeart
        stroke={isClicked ? "red" : "#fff"}
        fill={isClicked ? "red" : "transparent"}
        className={cn(
          "transition delay-150 ease-in",
          isClicked && "animate-float"
        )}
      />
      {prompt && (
        <p className="ml-2">
          {isClicked ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
        </p>
      )}
    </Button>
  )
}

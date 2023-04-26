"use client"

import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { SelectGenre } from "@/components/select-genre"
import { ThemeToggle } from "@/components/theme-toggle"

const genres = ["Accion", "Amor", "Comedia", "Ciencia Ficción"]

export function SiteHeader() {
  const path = usePathname()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            {/* TODO: Agregar selector de genero*/}
            {path !== "/" && <SelectGenre items={genres} />}
            <Input type="text" placeholder="Search..." />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

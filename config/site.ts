export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "MovieNow",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Peliculas",
      href: "/movies",
    },
    {
      title: "Series",
      href: "/series",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Encontrá la pelicula <br className="hidden sm:inline" />
          que tantas ganas tenías de ver.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          De manera fácil, sencilla, y con un diseño amigable, vas a poder
          encontrar tu pelicula o serie favorita.
        </p>
      </div>
    </section>
  )
}

export interface Serie {
  adult: boolean
  backdrop_path: string
  created_by: any[]
  episode_run_time: number[]
  first_air_date: Date
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: Date
  last_episode_to_air: TEpisodeToAir
  name: string
  next_episode_to_air: TEpisodeToAir
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Network[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface TEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: Date
  episode_number: number
  production_code: string
  runtime: null
  season_number: number
  show_id: number
  still_path: null
}

export interface Network {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface Season {
  air_date: Date
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: null
  season_number: number
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface SerieCast {
  cast: Cast[]
  crew: any[]
  id: number
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: null | string
  character: string
  credit_id: string
  order: number
}

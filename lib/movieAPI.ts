import axios from "axios"

export const movieAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
})
export const genreAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/genre/movie",
})
export const multiAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/multi",
})

export const serieAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv",
})

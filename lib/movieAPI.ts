import axios, { AxiosAdapter, AxiosInstance } from "axios"

export const movieAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
})

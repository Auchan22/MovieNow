import axios, { AxiosInstance } from "axios"

export const moovieAPI = (url: string): AxiosInstance => {
  return axios.create({
    baseURL: `https://api.themoviedb.org/3/${url}?api_key=${process.env.MOVIEAPI_TOKEN}`,
  })
}

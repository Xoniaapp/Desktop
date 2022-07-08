import Axios from "axios"

export const request = Axios.create({
  baseURL: `${import.meta.env.VITE_API!}/api`,
  withCredentials: true,
})

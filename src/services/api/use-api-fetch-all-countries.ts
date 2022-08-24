import { useQuery } from "@tanstack/react-query"
import { api } from "./api"

const fetchAllCountries = async () => {
  const countriesResponse = await api.get<Module.Country.Type[]>('/all')

  return countriesResponse.data
}

export const useApiFetchAllCountries = () => {
  return useQuery(["countries"], fetchAllCountries)
}
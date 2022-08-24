import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

type UseApiFetchAllCountriesProps = {
  countryToSearch?: string;
};

const fetchAllCountries = async (countryToSearch?: string) => {
  let endpoint = "/all";

  if (countryToSearch) {
    endpoint = `/name/${countryToSearch}`;
  }

  const countriesResponse = await api.get<Module.Country.Type[]>(endpoint);

  return countriesResponse.data;
};

export const useApiFetchAllCountries = (
  params?: UseApiFetchAllCountriesProps,
) => {
  return useQuery(["countries", params?.countryToSearch], () =>
    fetchAllCountries(params?.countryToSearch),
  );
};

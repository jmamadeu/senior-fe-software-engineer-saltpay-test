import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

type UseApiFetchCountryByNameProps = {
  name: string;
};

const fetchACountryByName = async (name: string) => {
  const countriesResponse = await api.get<Module.Country.Type[]>(
    `/name/${name}`,
  );

  return countriesResponse.data[0];
};

export const useApiFetchCountryByName = (
  params: UseApiFetchCountryByNameProps,
) => {
  return useQuery(["countries", params?.name], () =>
    fetchACountryByName(params.name),
  );
};

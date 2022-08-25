import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { CountriesListGrid } from "../../components/countries-list-grid/countries-list-grid";
import { SearchInput } from "../../components/search-input/search-input";
import { useApiFetchAllCountries } from "../../services/api/use-api-fetch-all-countries";

import styles from "./home.module.css";

import Select from "react-select";

const OPTIONS = [
  { value: "All", label: "All" },
  { value: "Europe", label: "Europe" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Oceania", label: "Oceania" },
  { value: "Africa", label: "Africa" },
];

function HomePage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<{ value?: string; label?: string }>(
    OPTIONS[0],
  );

  const { data: allCountries, isLoading } = useApiFetchAllCountries({
    countryToSearch: search,
  });

  const filteredCountries =
    region.value === "All"
      ? allCountries
      : allCountries?.filter(
          (country) =>
            country.region.toLowerCase() === region.value?.toLocaleLowerCase(),
        );

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.subHeader}>
          <SearchInput onChange={(value) => setSearch(value)} />
          <Select
            options={OPTIONS}
            value={region}
            onChange={(e) => setRegion({ value: e?.value, label: e?.label })}
          />
        </div>

        {isLoading && (
          <>
            <Skeleton count={5} />
            <Skeleton count={5} />
          </>
        )}

        {!isLoading && !filteredCountries?.length && (
          <h4>There's no countries to show</h4>
        )}

        {filteredCountries && (
          <CountriesListGrid countries={filteredCountries} />
        )}
      </div>
    </div>
  );
}

export default HomePage;

import { useState } from "react";
import { CountriesListGrid } from "./components/countries-list-grid/countries-list-grid";
import { Header } from "./components/header/header";
import { SearchInput } from "./components/search-input/search-input";
import { useApiFetchAllCountries } from "./services/api/use-api-fetch-all-countries";

import styles from "./App.module.css";

import Select from "react-select";

const OPTIONS = [
  { value: "All", label: "All" },
  { value: "Europe", label: "Europe" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Oceania", label: "Oceania" },
  { value: "Africa", label: "Africa" },
];

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<{ value?: string; label?: string }>(
    OPTIONS[0],
  );

  const { data: allCountries } = useApiFetchAllCountries({
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
      <Header />

      <div className={styles.mainContainer}>
        <div
          className={styles.subHeader}
        >
          <SearchInput onChange={(value) => setSearch(value)} />
          <Select
            options={OPTIONS}
            value={region}
            onChange={(e) => setRegion({ value: e?.value, label: e?.label })}
          />
        </div>

        {filteredCountries && (
          <CountriesListGrid countries={filteredCountries} />
        )}
      </div>
    </div>
  );
}

export default App;

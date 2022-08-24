import { useState } from "react";
import { CountriesListGrid } from "./components/countries-list-grid/countries-list-grid";
import { Header } from "./components/header/header";
import { SearchInput } from "./components/search-input/search-input";
import { useApiFetchAllCountries } from "./services/api/use-api-fetch-all-countries";

function App() {
  const [search, setSearch] = useState("")
  const { data: allCountries } = useApiFetchAllCountries({countryToSearch: search});


  return (
    <div>
      <Header />

      <div
        style={{
          maxWidth: "1400px",
          margin: "20px auto",
          padding: "0 20px"
          
        }}
      >
        <div style={{
          marginBottom: "20px"
        }}>
          <SearchInput onChange={value => setSearch(value)} />
        </div>

        {allCountries && <CountriesListGrid countries={allCountries} />}
      </div>
    </div>
  );
}

export default App;

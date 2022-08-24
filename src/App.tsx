import { CountriesListGrid } from "./components/countries-list-grid/countries-list-grid";
import { Header } from "./components/header/header";
import { useApiFetchAllCountries } from "./services/api/use-api-fetch-all-countries";

function App() {
  const { data: allCountries } = useApiFetchAllCountries();

  console.log(allCountries);
  return (
    <div>
      <Header />

      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        marginTop: 20
      }}>
        {allCountries && <CountriesListGrid countries={allCountries} />}
      </div>
    </div>
  );
}

export default App;

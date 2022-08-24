import { Header } from "./components/header/header";
import { useApiFetchAllCountries } from "./services/api/use-api-fetch-all-countries";

function App() {
  const { data: allCountries } = useApiFetchAllCountries()

  console.log(allCountries)
  return (
    <div>
      <Header />

      <div>
        
      </div>
    </div>
  );
}

export default App;

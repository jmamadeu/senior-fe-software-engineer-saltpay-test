import { CountryCard } from "../country-card/country-card";
import styles from "./countries-list-grid.module.css";

type CountriesListGridProps = {
  countries: Module.Country.Type[];
};

export const CountriesListGrid = ({ countries }: CountriesListGridProps) => {
  return (
    <div className={styles.grid}>
      {countries.map((country, idx) => (
        <CountryCard key={`${country.cioc}-${idx}`} country={country} />
      ))}
    </div>
  );
};

import { Link, useParams } from "react-router-dom";
import { useApiFetchCountryByName } from "../../services/api/use-api-fetch-country-by-name";

import styles from "./country.module.css";

function CountryPage() {
  let { countryName } = useParams();
  const { data: country } = useApiFetchCountryByName({
    name: countryName ?? "",
  });

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">Back</Link>
        <div className={styles.grid}>
          <img
            alt="country name"
            src={country?.flag}
            width={400}
            height={300}
          />

          <div>
            <h2>{country?.name}</h2>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>
                  <b>Native Name</b> {country?.nativeName}
                </span>
                <span>
                  <b>Population</b> {country?.population}
                </span>
                <span>
                  <b>Region</b> {country?.region}
                </span>
                <span>
                  <b>Sub Region</b> {country?.subregion}
                </span>
                <span>
                  <b>Capital</b> {country?.capital}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>
                  <b>Top Level Domain</b> {country?.topLevelDomain}
                </span>
                <span>
                  <b>Currencies</b>{" "}
                  <div style={{ display: "flex", gap: 10 }}>
                    {country?.currencies.map((cr) => (
                      <span key={cr.code}>{cr.code}</span>
                    ))}
                  </div>
                </span>
                <span>
                  <b>Languages</b>
                  <div style={{ display: "flex", gap: 10 }}>
                    {country?.languages.map((lang) => (
                      <span key={lang.name}>{lang.name}</span>
                    ))}
                  </div>
                </span>
              </div>
            </div>

            <div style={{ marginTop: 60 }}>
              <span>Border Countries: </span>
              <div style={{ display: "flex", gap: 10 }}>
                {country?.borders.map((border) => (
                  <span key={border}>{border}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;

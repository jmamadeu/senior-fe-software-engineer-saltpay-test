import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";

import { useApiFetchCountryByName } from "../../services/api/use-api-fetch-country-by-name";

import styles from "./country.module.css";

function CountryPage() {
  let { countryName } = useParams();

  const { data: country, isLoading } = useApiFetchCountryByName({
    name: countryName ?? "",
  });

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">Back</Link>

        {isLoading && <Skeleton count={5} />}

        {country && (
          <div className={styles.grid}>
            <img
              alt="country name"
              src={country?.flag}
              width={400}
              height={300}
            />

            <div>
              <h2>{country?.name}</h2>

              <div className={styles.mainContainer}>
                <div className={styles.sectionCard}>
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
                <div className={styles.sectionCard}>
                  <span>
                    <b>Top Level Domain</b> {country?.topLevelDomain}
                  </span>
                  <span>
                    <b>Currencies</b>{" "}
                    <div className={styles.lineItem}>
                      {country?.currencies?.map((cr) => (
                        <span key={cr.code}>{cr.code}</span>
                      ))}
                    </div>
                  </span>
                  <span>
                    <b>Languages</b>
                    <div className={styles.lineItem}>
                      {country?.languages?.map((lang) => (
                        <span key={lang.name}>{lang.name}</span>
                      ))}
                    </div>
                  </span>
                </div>
              </div>

              <div className={styles.footer}>
                <span>Border Countries: </span>
                <div className={styles.lineItem}>
                  {country?.borders?.map((border) => (
                    <span key={border}>{border}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryPage;

import styles from "./country-card.module.css";

type CountryCardProps = {
  country: Module.Country.Type;
};

export const CountryCard = ({
  country: { name, capital, flag, population, region },
}: CountryCardProps) => (
  <div>
    <img width={200} height={150} alt="country flag" src={flag} />

    <div className={styles.cardContent}>
      <span className={styles.title}>{name}</span>

      <div className={styles.cardContentDescription}>
        <span>
          Population: <b>{population}</b>
        </span>
        <span>
          Region: <b>{region}</b>
        </span>
        <span>
          Capital: <b>{capital}</b>
        </span>
      </div>
    </div>
  </div>
);

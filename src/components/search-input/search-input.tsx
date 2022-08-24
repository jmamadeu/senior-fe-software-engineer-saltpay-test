import styles from "./search-input.module.css";

export const SearchInput = () => {
  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        title="Search input"
        className={styles.input}
        placeholder="Search Input"
      />
      {/* <label htmlFor="swarch">Search a country</label> */}
    </>
  );
};

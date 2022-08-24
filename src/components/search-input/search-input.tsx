import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import styles from "./search-input.module.css";

type SearchInputProps = {
  onChange: (value: string) => void;
};

export const SearchInput = ({ onChange }: SearchInputProps) => {
  const [search, setSearch] = useState<string>("");

  const debouncedValue = useDebounce<string>(search, 500);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <input
      type="search"
      name="search"
      id="search"
      title="Search input"
      className={styles.input}
      placeholder="Search Input"
      onChange={handleChange}
    />
  );
};

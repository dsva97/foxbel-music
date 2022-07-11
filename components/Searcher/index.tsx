import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons";
import classes from "./style.module.css";

interface ISearcherProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Searcher = ({
  className,
  placeholder = "Buscar",
  ...props
}: ISearcherProps) => {
  return (
    <label className={classes.label}>
      <input
        type="text"
        placeholder={placeholder}
        className={`${classes.input} ${className}`}
        {...props}
      />
      <SearchIcon />
    </label>
  );
};

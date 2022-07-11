import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons";
import classes from "./style.module.css";

interface ISearcherProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  inputClassName?: string;
}

export const Searcher = ({
  containerClassName,
  inputClassName,
  placeholder = "Buscar",
  ...props
}: ISearcherProps) => {
  return (
    <label className={`${classes.label} ${containerClassName}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`${classes.input} ${inputClassName}`}
        {...props}
      />
      <SearchIcon />
    </label>
  );
};

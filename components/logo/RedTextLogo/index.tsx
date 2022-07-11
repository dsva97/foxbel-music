import { HTMLAttributes } from "react";
import redTextLogo from "../../../assets/img/foxbel-music.png";
import classes from "./style.module.css";

export interface IRedTextLogoProps extends HTMLAttributes<HTMLImageElement> {}
export const RedTextLogo = ({ className, ...props }: IRedTextLogoProps) => {
  return (
    <img
      src={redTextLogo.src}
      className={`${classes.img} ${className}`}
      {...props}
    />
  );
};

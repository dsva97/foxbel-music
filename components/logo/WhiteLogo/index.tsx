import { HTMLAttributes } from "react";
import whiteLogo from "../../../assets/img/foxbel-music-white-icon.png";
import classes from "./style.module.css";

export interface IWhiteLogoProps extends HTMLAttributes<HTMLImageElement> {}
export const WhiteLogo = ({ className, ...props }: IWhiteLogoProps) => {
  return (
    <img
      src={whiteLogo.src}
      className={`${classes.img} ${className}`}
      {...props}
    />
  );
};

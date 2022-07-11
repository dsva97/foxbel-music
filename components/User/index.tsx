import React, { HTMLAttributes } from "react";
import { UserIcon } from "../icons";
import classes from "./style.module.css";

interface IUserProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}
export const User = ({ name, className, ...props }: IUserProps) => {
  return (
    <div className={`${classes.container} ${className}`} {...props}>
      <UserIcon className={classes.icon} />
      <span className={classes.text}>{name}</span>
    </div>
  );
};

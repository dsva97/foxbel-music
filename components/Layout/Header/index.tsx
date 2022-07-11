import React from "react";
import { Searcher, WhiteLogo, User } from "../..";
import classes from "./style.module.css";

export const Header = () => {
  return (
    <div className={classes.container}>
      <WhiteLogo className={classes.logo} />
      <Searcher containerClassName={classes.searcher} />
      <User name="Francisco M." className={classes.user} />
    </div>
  );
};

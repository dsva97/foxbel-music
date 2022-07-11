import { ReactNode, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";
import classes from "./style.module.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.container}>
      <Header className={classes.header} />
      <Menu className={classes.menu} />
      <main className={classes.main}>{children}</main>
      <Footer className={classes.footer} />
    </div>
  );
};

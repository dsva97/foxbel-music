import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import classes from "./style.module.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

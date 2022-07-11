import { HTMLAttributes } from "react";
import { Searcher, WhiteLogo, User } from "../..";
import { useStore } from "../../../store";
import classes from "./style.module.css";

export interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const Header = ({ className, ...props }: IHeaderProps) => {
  const { isMenuOpen, setIsMenuOpen } = useStore();
  return (
    <div className={`${classes.container} ${className}`} {...props}>
      <WhiteLogo
        className={classes.logo}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Searcher containerClassName={classes.searcher} />
      <User name="Francisco M." className={classes.user} />
    </div>
  );
};

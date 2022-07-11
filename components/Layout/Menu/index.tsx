import Link from "next/link";
import { HTMLAttributes } from "react";
import { RedTextLogo, ListMenu } from "../../";
import classes from "./style.module.css";
import { GrClose } from "react-icons/gr";
import { useStore } from "../../../store";
import { useMobile } from "../../../hooks";

const libraryMenuData = [
  {
    label: "Recientes",
    href: "/recientes",
  },
  {
    label: "Artistas",
    href: "/artistas",
  },
  {
    label: "Albums",
    href: "/albums",
  },
  {
    label: "Canciones",
    href: "/canciones",
  },
  {
    label: "Estaciones",
    href: "/estaciones",
  },
];

const playlistMenuData = [
  {
    label: "Metal",
    href: "/metal",
  },
  {
    label: "Para bailar",
    href: "/para-bailar",
  },
  {
    label: "Rock 90's",
    href: "/rock-90s",
  },
  {
    label: "Baladas",
    href: "/baladas",
  },
];

interface IMenuProps extends HTMLAttributes<HTMLDivElement> {}
export const Menu = ({ className, ...props }: IMenuProps) => {
  const { isMenuOpen, setIsMenuOpen } = useStore();
  const isMobile = useMobile();
  return !isMenuOpen && isMobile ? null : (
    <div className={`${classes.container} ${className}`} {...props}>
      <Link href="/">
        <a className={classes.containerLogo}>
          <RedTextLogo />

          <GrClose
            className={classes.iconClose}
            onClick={() => setIsMenuOpen(false)}
          />
        </a>
      </Link>
      <ListMenu title="Mi Librería" items={libraryMenuData} />
      <ListMenu title="Playlist" items={playlistMenuData} />
    </div>
  );
};

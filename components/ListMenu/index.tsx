import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./style.module.css";

interface ILinkMenuProps {
  href: string;
  label: string;
}
const LinkMenu = ({ href, label }: ILinkMenuProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <li key={label}>
      <Link href={href}>
        <a className={`${classes.link} ${isActive ? classes.active : ""}`}>
          {label}
        </a>
      </Link>
    </li>
  );
};

export interface IListMenuProps {
  title: string;
  items: ILinkMenuProps[];
}
export const ListMenu = ({ title, items }: IListMenuProps) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <ul>{items.map(LinkMenu)}</ul>
    </div>
  );
};

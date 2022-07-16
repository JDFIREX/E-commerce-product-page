import React from "react";

import { RouterEnum } from "../../../enums/router.enum";
import Link, { ILink } from "../../atoms/tab/link";

import styles from "./links.module.scss";

const linkList: ILink[] = Object.values(RouterEnum).map(
  (value: RouterEnum): ILink => ({
    name: value,
    router: value !== RouterEnum.COLLECTIONS ? `/${value}` : "/"
  })
);

const Links = (): JSX.Element => {
  return (
    <nav className={styles.tabs}>
      {linkList.map((link: ILink) => (
        <Link key={link.name} link={link} />
      ))}
    </nav>
  );
};

export default Links;

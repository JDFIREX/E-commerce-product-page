import React from "react";

import { RouterEnum, RouterEnumHelper } from "../../../enums/router.enum";
import Link, { ILink } from "../../atoms/tab/link";

import styles from "./links.module.scss";

const linkList: ILink[] = Object.keys(RouterEnum).map(
  (router: string): ILink => ({
    name: RouterEnumHelper.getValue(router),
    router: router !== "COLLECTIONS" ? `/${RouterEnumHelper.getValue(router)}` : "/"
  })
);

const Links = (): JSX.Element => {
  return (
    <div className={styles.tabs}>
      {linkList.map((link: ILink) => (
        <Link key={link.name} link={link} />
      ))}
    </div>
  );
};

export default Links;

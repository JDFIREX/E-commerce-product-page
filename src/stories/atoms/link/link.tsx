import React from "react";
import NextLink from "next/link";

import { RouterEnum } from "../../../enums/router.enum";

import styles from "./link.module.scss";

export interface ILink {
  name: RouterEnum;
  router: string;
}

interface LinkProps {
  link: ILink;
}

const Link = (props: LinkProps): JSX.Element => {
  const { link } = props;

  return (
    <NextLink href={link.router}>
      <p className={styles.name}>{link.name}</p>
    </NextLink>
  );
};

export default Link;

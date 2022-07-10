import React from "react";
import NextLink from "next/link";

import { RouterEnum } from "../../../enums/router.enum";

import styles from "./tab.module.scss";

export interface ITab {
  name: RouterEnum;
  link: string;
}

interface TabProps {
  tab: ITab;
}

const Tab = (props: TabProps): JSX.Element => {
  const { tab } = props;

  return (
    <NextLink href={tab.link}>
      <p className={styles.name}>{tab.name}</p>
    </NextLink>
  );
};

export default Tab;

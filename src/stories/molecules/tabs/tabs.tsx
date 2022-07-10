import React from "react";

import { RouterEnum, RouterEnumHelper } from "../../../enums/router.enum";
import Tab, { ITab } from "../../atoms/tab/tab";

import styles from "./tabs.module.scss";

const tabList: ITab[] = Object.keys(RouterEnum).map(
  (router: string): ITab => ({
    name: RouterEnumHelper.getValue(router),
    link: router !== "COLLECTIONS" ? `/${RouterEnumHelper.getValue(router)}` : "/",
  })
);

const Tabs = (): JSX.Element => {
  return (
    <div className={styles.tabs}>
      {tabList.map((tab: ITab) => (
        <Tab key={tab.name} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;

import React from "react";
import Link from "next/link";

import PageLogo from "../../atoms/page-logo/page-logo";
import Tabs from "../../molecules/tabs/tabs";
import UserTab from "../user-tab/user-tab";

import styles from "./navbar-layout.module.scss";

interface NavbarLayoutProps {
  children?: React.ReactNode;
}

const NavbarLayout = (props: NavbarLayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <PageLogo />
          </Link>
        </div>
        <Tabs />
        <UserTab />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default NavbarLayout;

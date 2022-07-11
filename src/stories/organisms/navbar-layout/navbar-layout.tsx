import React from "react";
import Link from "next/link";

import PageLogo from "../../atoms/page-logo/page-logo";
import Links from "../../molecules/links/links";
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
        <Links />
        <UserTab />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default NavbarLayout;

import React from "react";
import NextLink from "next/link";

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
    <>
      <nav className={styles.navbar}>
        <NextLink href="/">
          <PageLogo />
        </NextLink>
        <Links />
        <UserTab />
      </nav>

      <main>{children}</main>
    </>
  );
};

export default NavbarLayout;

import React from "react";
import Link from "next/link";

import PageLogo from "../../atoms/page-logo/page-logo";
import Tabs from "../../molecules/tabs/tabs";
import UserTab from "../user-tab/user-tab";

interface NavbarLayoutProps {
  children?: React.ReactNode;
}

const NavbarLayout = (props: NavbarLayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <div>
      <div>
        <Link href="/">
          <PageLogo />
        </Link>
        <Tabs />
        <UserTab />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default NavbarLayout;

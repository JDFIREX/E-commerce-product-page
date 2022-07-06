import React from "react";
import type { AppProps } from "next/app";

import NavbarLayout from "../stories/organisms/navbar-layout/navbar-layout";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <NavbarLayout>
      <Component {...pageProps} />
    </NavbarLayout>
  );
};

export default MyApp;

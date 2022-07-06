import React from "react";
import Image from "next/image";

const PageLogo = (): JSX.Element => {
  return <Image src={`/images/logo.svg`} layout="fixed" width="138" height="20" alt="logo image" />;
};

export default PageLogo;

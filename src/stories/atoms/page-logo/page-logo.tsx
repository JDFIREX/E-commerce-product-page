import React from "react";
import Image from "next/image";

const PageLogo = React.forwardRef((): JSX.Element => {
  return <Image src="/images/logo.svg" layout="fixed" width="138" height="20" alt="logo image" />;
});

PageLogo.displayName = "Page Logo";

export default PageLogo;

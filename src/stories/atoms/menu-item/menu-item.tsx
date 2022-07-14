import React from "react";

type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement>;

const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { children, ...rest } = props;

  return <li {...rest}>{children}</li>;
};

export default MenuItem;

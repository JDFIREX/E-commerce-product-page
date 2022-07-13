import React from "react";
import Image from "next/image";

import styles from "./cart-icon.module.scss";

interface CartIconProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  toggleCartMenu: () => void;
}

const CartIcon = (props: CartIconProps): JSX.Element => {
  const { toggleCartMenu, ...rest } = props;

  const handleClick = (): void => {
    toggleCartMenu();
  };

  return (
    <button onClick={handleClick} className={styles.cart_icon} {...rest}>
      <Image src="/images/icon-cart.svg" width="22" height="20" layout="fixed" alt="icon cart" />
    </button>
  );
};

export default CartIcon;

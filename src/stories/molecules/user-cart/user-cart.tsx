import React, { useState } from "react";

import CartIcon from "../../atoms/cart-icon/cart-icon";
import MenuWrapper from "../../atoms/menu-wrapper/menu-wrapper";

import styles from "./user-cart.module.scss";

const UserCart = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = (): void => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.cart}>
      <CartIcon toggleCartMenu={toggleMenuOpen} aria-selected={menuOpen} />
      <MenuWrapper isOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} className={styles.menu}>
        <li>
          <p>menu cart</p>
        </li>
      </MenuWrapper>
    </div>
  );
};

export default UserCart;

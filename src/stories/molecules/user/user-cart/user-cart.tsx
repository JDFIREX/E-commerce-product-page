import React, { useState } from "react";

import CartIcon from "../../../atoms/cart-icon/cart-icon";
import MenuItem from "../../../atoms/menu-item/menu-item";
import MenuWrapper from "../../menu-wrapper/menu-wrapper";

import styles from "./user-cart.module.scss";

const UserCart = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = (): void => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.cart}>
      <CartIcon toggleCartMenu={toggleMenuOpen} aria-pressed={menuOpen} />
      <MenuWrapper isOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} className={styles.menu}>
        <MenuItem>
          <p>menu cart</p>
        </MenuItem>
      </MenuWrapper>
    </div>
  );
};

export default UserCart;

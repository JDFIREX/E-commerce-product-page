import React, { useRef, useState } from "react";

import CartIcon from "../../atoms/cart-icon/cart-icon";
import MenuWrapper from "../../atoms/menu-wrapper/menu-wrapper";

const UserCart = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartIconRef = useRef<HTMLDivElement>(null);

  const toggleMenuOpen = (): void => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <CartIcon toggleCartMenu={toggleMenuOpen} ref={cartIconRef} />
      <MenuWrapper isOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} anchorEl={cartIconRef}>
        <p>menu cart</p>
      </MenuWrapper>
    </div>
  );
};

export default UserCart;

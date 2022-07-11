import React from "react";
import Image from "next/image";

interface CartIconProps {
  toggleCartMenu: () => void;
  ref?: React.RefObject<HTMLDivElement>;
}

const CartIcon = (props: CartIconProps): JSX.Element => {
  const { toggleCartMenu, ref } = props;

  const handleClick = (): void => {
    toggleCartMenu();
  };

  return (
    <div onClick={handleClick} ref={ref}>
      <Image src="/images/icon-cart.svg" width="22" height="20" layout="fixed" alt="icon cart" />
    </div>
  );
};

export default CartIcon;

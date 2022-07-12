import React from "react";
import Image from "next/image";

interface CartIconProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  toggleCartMenu: () => void;
  ref?: React.RefObject<HTMLDivElement>;
}

const CartIcon = (props: CartIconProps): JSX.Element => {
  const { toggleCartMenu, className, ...rest } = props;

  const handleClick = (): void => {
    toggleCartMenu();
  };

  return (
    <figure onClick={handleClick} className={className} {...rest}>
      <Image src="/images/icon-cart.svg" width="22" height="20" layout="fixed" alt="icon cart" />
    </figure>
  );
};

export default CartIcon;

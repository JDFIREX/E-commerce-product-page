import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import styles from "./menu-wrapper.module.scss";

interface MenuWrapperProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  children: React.ReactNode;
  isOpen: boolean;
  toggleMenuOpen: () => void;
}

const MenuWrapper = (props: MenuWrapperProps): JSX.Element | null => {
  const { isOpen, children, toggleMenuOpen, className, ...rest } = props;

  const [toggleMenuAvailable, setToggleMenuAvailable] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = useCallback(
    ({ target }: MouseEvent) => {
      if (menuRef.current && toggleMenuAvailable && !menuRef.current.contains(target as Node)) {
        toggleMenuOpen();
      }
    },
    [toggleMenuAvailable, toggleMenuOpen]
  );

  useEffect(() => {
    setToggleMenuAvailable(false);

    if (isOpen && menuRef.current) {
      window.addEventListener("click", toggleMenu);
      setToggleMenuAvailable(true);
    }

    return () => {
      window.removeEventListener("click", toggleMenu);
    };
  }, [isOpen, toggleMenu]);

  if (!isOpen) {
    return null;
  }

  return (
    <ul
      className={classNames({
        [styles.menu]: true,
        className
      })}
      ref={menuRef}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default MenuWrapper;

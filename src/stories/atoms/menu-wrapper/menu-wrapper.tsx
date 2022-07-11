import React, { useCallback, useEffect, useRef } from "react";

import styles from "./menu-wrapper.module.scss";

interface MenuWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggleMenuOpen: () => void;
  anchorEl: React.RefObject<HTMLDivElement>;
}

const MenuWrapper = (props: MenuWrapperProps): JSX.Element | null => {
  const { isOpen, children, toggleMenuOpen, anchorEl } = props;

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(
    (e: MouseEvent) => {
      console.log(menuRef, e.target, anchorEl.current);
      if (
        menuRef.current &&
        anchorEl.current &&
        e.target &&
        (!menuRef.current.contains(e.target) || e.target !== anchorEl.current)
      ) {
        toggleMenuOpen();
      }
    },
    [anchorEl, toggleMenuOpen]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", toggleMenu);
    }

    return () => {
      window.removeEventListener("click", toggleMenu);
    };
  }, [isOpen, toggleMenu]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.menu} ref={menuRef}>
      {children}
    </div>
  );
};

export default MenuWrapper;

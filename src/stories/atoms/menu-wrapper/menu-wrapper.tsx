import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "./menu-wrapper.module.scss";

interface MenuWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggleMenuOpen: () => void;
}

const MenuWrapper = (props: MenuWrapperProps): JSX.Element | null => {
  const { isOpen, children, toggleMenuOpen } = props;

  const [toggleMenuAvailable, setToggleMenuAvailable] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.menu} ref={menuRef}>
      {children}
    </div>
  );
};

export default MenuWrapper;

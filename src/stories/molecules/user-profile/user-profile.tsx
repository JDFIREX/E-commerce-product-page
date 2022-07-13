import React, { useState } from "react";

import MenuWrapper from "../../atoms/menu-wrapper/menu-wrapper";
import UserProfileLogo from "../../atoms/user-profile-logo/user-profile-logo";

import styles from "./user-profile.module.scss";

const UserProfile = (): JSX.Element => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = (): void => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <UserProfileLogo toggleProfileMenu={toggleProfileMenu} aria-pressed={isProfileMenuOpen} />
      <MenuWrapper
        isOpen={isProfileMenuOpen}
        toggleMenuOpen={toggleProfileMenu}
        className={styles.profile_menu}
      >
        <li>
          <p>menu profile</p>
        </li>
      </MenuWrapper>
    </div>
  );
};

export default UserProfile;

import React, { useState } from "react";

import MenuItem from "../../../atoms/menu-item/menu-item";
import UserProfileLogo from "../../../atoms/user-profile-logo/user-profile-logo";
import MenuWrapper from "../../menu-wrapper/menu-wrapper";

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
        <MenuItem>
          <p>menu profile</p>
        </MenuItem>
      </MenuWrapper>
    </div>
  );
};

export default UserProfile;

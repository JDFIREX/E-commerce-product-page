import React from "react";
import Image from "next/image";

import styles from "./user-profile-logo.module.scss";

interface UserProfileLogoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  toggleProfileMenu: () => void;
}

const UserProfileLogo = (props: UserProfileLogoProps): JSX.Element => {
  const { toggleProfileMenu, ...rest } = props;

  const handleClick = (): void => {
    toggleProfileMenu();
  };

  return (
    <button className={styles.profile} onClick={handleClick} {...rest}>
      <Image
        src="/images/image-avatar.png"
        width={50}
        height={50}
        layout="fixed"
        alt="avatar image"
      />
    </button>
  );
};

export default UserProfileLogo;

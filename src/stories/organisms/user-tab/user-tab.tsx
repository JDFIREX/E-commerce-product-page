import React from "react";

import UserCart from "../../molecules/user-cart/user-cart";
import UserProfile from "../../molecules/user-profile/user-profile";

import styles from "./user-tab.module.scss";

const UserTab = (): JSX.Element => {
  return (
    <div className={styles.user_tab}>
      <UserCart />
      <UserProfile />
    </div>
  );
};

export default UserTab;

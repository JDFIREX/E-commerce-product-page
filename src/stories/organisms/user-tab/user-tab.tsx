import React from "react";

import UserCart from "../../molecules/user-cart/user-cart";
import UserProfile from "../../molecules/user-profile/user-profile";

const UserTab = (): JSX.Element => {
  return (
    <div>
      <UserCart />
      <UserProfile />
    </div>
  );
};

export default UserTab;

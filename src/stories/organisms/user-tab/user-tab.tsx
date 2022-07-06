import React from "react";

import UserNotifications from "../../molecules/user-notifications/user-notifications";
import UserProfile from "../../molecules/user-profile/user-profile";

const UserTab = (): JSX.Element => {
  return (
    <div>
      <UserNotifications />
      <UserProfile />
    </div>
  );
};

export default UserTab;

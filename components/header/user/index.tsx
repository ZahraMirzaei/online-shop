import React from "react";
import { useSelector } from "react-redux";
import { IUserInfoRootState } from "../../../lib/types/user";
import UserAccountBtn from "./UserAccountBtn";
import LoginBtn from "./LoginBtn";

const User = () => {
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );
  return (
    <div className="ml-4">{userInfo ? <UserAccountBtn /> : <LoginBtn />}</div>
  );
};

export default User;

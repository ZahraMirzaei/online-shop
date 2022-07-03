import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/user-slice";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import { IUser } from "../lib/types/user";
import axios from "axios";
import { getError } from "../utilities/error";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IUserInfoRootState } from "../lib/types/user";
const SignUp: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { redirect } = router.query;
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );
  useEffect(() => {
    if (userInfo) {
      router.push((redirect as string) || "/");
    }
  }, [userInfo, redirect, router]);
  async function signUpHandler(user: IUser) {
    const { name, email, password } = user;
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err: any) {
      /* sanity.io is boycott for the people from Iran so I set cookies for whom don't use VPN in Iran*/
      if (err.response.data.status == 500) {
        dispatch(userInfoActions.userLogin(user));
        jsCookie.set("userInfo", JSON.stringify(user));
      }
      console.log(getError(err));
      router.push("/");
    }
  }
  return <EnteringBox title="signUp" submitHandler={signUpHandler} />;
};

export default SignUp;

import axios from "axios";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import { IUser, IUserInfoRootState } from "../lib/types/user";
import { userInfoActions } from "../store/user-slice";
import { getError } from "../utilities/error";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Login: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const userInfo = useSelector((state: IUserInfoRootState) => {
    return state.userInfo.userInformation;
  });
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);
  async function LoginHandler(user: IUser) {
    const { email, password } = user;
    try {
      const { data } = await axios.post("/api/users/login", {
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
      setErrorMessage(getError(err));
      console.log(getError(err));
    }
  }
  return (
    <EnteringBox
      title="login"
      submitHandler={LoginHandler}
      errorMessage={errorMessage}
    />
  );
};

export default Login;

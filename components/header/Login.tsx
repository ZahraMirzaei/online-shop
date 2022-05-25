import React from "react";
import { useRouter } from "next/router";
import { HiOutlineLogin } from "react-icons/hi";

import en from "../../locales/en";
import fa from "../../locales/fa";

interface Props {
  modifier?: string;
}
const Login: React.FC<Props> = ({ modifier }) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  return (
    <>
      {modifier === "md" ? (
        <div className="flex items-center rounded-lg border-2 border-palette-secondary py-1 px-2 ltr:mr-6 rtl:ml-6 shadow-md">
          <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
          <p className="ltr:ml-2 rtl:mr-2 text-xs">
            {t.login} | {t.signIn}
          </p>
        </div>
      ) : (
        <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
      )}
    </>
  );
};

export default Login;

import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { HiOutlineLogin } from "react-icons/hi";

interface Props {
  modifier?: string;
}
const Login: React.FC<Props> = ({ modifier }) => {
  const { t } = useLanguage();
  return (
    <>
      {modifier === "md" ? (
        <div className="flex items-center rounded-lg  py-1 px-2 ltr:mr-6 rtl:ml-6 border-[1px] border-gray-200 shadow-sm ">
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

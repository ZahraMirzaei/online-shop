import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";

interface Props {
  modifier?: string;
}
const LoginBtn: React.FC<Props> = ({ modifier }) => {
  const { t } = useLanguage();
  return (
    <Link href={"/login"}>
      <a>
        {modifier === "md" ? (
          <div className="flex items-center rounded-lg  py-1 px-2 ltr:mr-3 rtl:ml-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
            <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
            <p className="ltr:ml-2 rtl:mr-2 text-xs">
              {t.login} | {t.signUp}
            </p>
          </div>
        ) : (
          <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
        )}
      </a>
    </Link>
  );
};

export default LoginBtn;

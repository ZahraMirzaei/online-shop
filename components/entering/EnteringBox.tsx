import React from "react";
import Link from "next/link";
import Input from "../UI/Input";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  title: string;
}
const EnteringBox: React.FC<Props> = ({ title }) => {
  const { t } = useLanguage();

  function loginHandler(e: React.FormEvent) {
    e.preventDefault();
  }
  const linkHref = title === "login" ? "signUp" : "login";

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold">{t[`${title}`]}</h2>
        <p className="mt-4 mb-2">
          {t.hi}
          {title === "login" ? (
            <>
              <br />
              <span className="inline-block text-palette-mute text-[12px] mt-2 p-1 bg-slate-300/30">
                {t.loginExplanation}
              </span>
            </>
          ) : null}
        </p>
        <form onSubmit={loginHandler}>
          <div className="mt-8">
            <Input
              type="text"
              id="userName"
              placeholder="enterYourUserName"
              title="text"
              required={true}
            />
            <Input
              type="password"
              id="password"
              placeholder="enterYourPassword"
              title="123456"
              required={true}
            />
            {title === "signUp" ? (
              <Input
                type="email"
                id="email"
                placeholder="enterYourEmail"
                title="123456"
                required={true}
              />
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg"
          >
            {t[`${title}`]}
          </button>
        </form>
        <Link href={`/${linkHref}`}>
          <a className="block my-4">
            <span className="text-sm text-palette-mute">
              {t.doHaveAnAccount}
            </span>
            <span className="text-cyan-500">{t[`${linkHref}`]}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EnteringBox;

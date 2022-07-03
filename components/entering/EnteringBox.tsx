import React, { useRef } from "react";
import Link from "next/link";
import Input from "../UI/Input";
import { useLanguage } from "../../hooks/useLanguage";
import { IUser } from "../../lib/types/user";

interface Props {
  title: string;
  submitHandler: (user: IUser) => void;
}
const EnteringBox: React.FC<Props> = ({ title, submitHandler }) => {
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { t } = useLanguage();

  function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (
      userNameRef.current?.value &&
      passwordRef.current?.value &&
      emailRef.current?.value
    ) {
      const user: IUser = {
        name: userNameRef.current?.value,
        password: passwordRef.current?.value,
        email: emailRef.current?.value,
        isAdmin: false,
      };
      submitHandler(user);
      // userNameRef.current.changeValue('');
      // passwordRef.current.changeValue('');
      // emailRef.current.changeValue('');
    }
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
        <form onSubmit={onSubmitHandler}>
          <div className="mt-8">
            <Input
              ref={userNameRef}
              type="text"
              id="userName"
              placeholder="enterYourUserName"
              title={title === "login" ? "test" : undefined}
              required={true}
            />
            <Input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="enterYourPassword"
              title={title === "login" ? "123456" : undefined}
              required={true}
            />
            {title === "signUp" ? (
              <Input
                ref={emailRef}
                type="email"
                id="email"
                placeholder="enterYourEmail"
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
              {title === "login" ? t.doHaveAnAccount : t.alreadyHaveAnAccount}
            </span>
            <span className="text-cyan-500">{t[`${linkHref}`]}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EnteringBox;

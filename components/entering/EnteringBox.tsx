import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Input from "../UI/Input";
import { useLanguage } from "../../hooks/useLanguage";
import { IUser } from "../../lib/types/user";

interface Props {
  title: string;
  submitHandler: (user: IUser) => void;
  errorMessage: string;
}
const EnteringBox: React.FC<Props> = ({
  title,
  submitHandler,
  errorMessage,
}) => {
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const errorMessageRef = useRef<HTMLSpanElement | null>(null);
  const { t } = useLanguage();

  if (errorMessage) {
    title === "signUp" ? userNameRef.current?.focus() : null;
    emailRef.current?.focus();
    passwordRef.current?.focus();
  }

  function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (passwordRef.current?.value && emailRef.current?.value) {
      let user: IUser | null = null;
      if (userNameRef.current?.value && title === "signUp") {
        user = {
          name: userNameRef.current?.value,
          password: passwordRef.current?.value,
          email: emailRef.current?.value,
          isAdmin: false,
        };
      } else {
        user = {
          password: passwordRef.current?.value,
          email: emailRef.current?.value,
        };
      }
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
              <span className="inline-block text-palette-mute dark:text-palette-base/80 text-[12px] mt-2 bg-palette-fill p-2">
                {t.loginExplanation}
              </span>
            </>
          ) : null}
        </p>
        <form onSubmit={onSubmitHandler}>
          <div className="mt-8">
            {title === "signUp" ? (
              <Input
                ref={userNameRef}
                type="text"
                id="userName"
                placeholder="enterYourUserName"
                required={true}
              />
            ) : null}

            <Input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="enterYourEmail"
              required={true}
              title={title === "login" ? "test@info.co" : undefined}
            />

            <Input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="enterYourPassword"
              title={title === "login" ? "123456" : undefined}
              required={true}
            />
          </div>
          {errorMessage && (
            <span
              ref={errorMessageRef}
              className="text-rose-600 block -mt-4 mb-4"
            >
              {t[`${errorMessage}`] ? t[`${errorMessage}`] : errorMessage}
            </span>
          )}

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

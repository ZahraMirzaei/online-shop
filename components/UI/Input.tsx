import React, { useImperativeHandle, useRef, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  id: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  classes?: string;
  value?: string;
  ref?: HTMLInputElement;
  readonly?: boolean;
  autocomplete?: string;
  title?: string;
  required?: boolean;
}

interface IImperativeHandler {
  focus: () => void;
  value?: string;
}
const Input = React.forwardRef<IImperativeHandler, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(props.value || "");

  function inputChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  function inputFocused() {
    inputRef.current?.focus();
    inputRef.current?.setAttribute("style", "border:2px solid red");
  }

  useImperativeHandle(ref, () => {
    return {
      focus: inputFocused,
      value: value,
    };
  });
  const { t } = useLanguage();
  return (
    <div className="relative mb-8">
      <label
        className="absolute -top-[30%] ltr:left-3 rtl:right-3 bg-palette-card p-[0.3rem] whitespace-nowrap"
        htmlFor={props.id}
      >
        {props.required ? (
          <span className="text-rose-700 mx-1 mt-1">*</span>
        ) : null}
        {t[`${props.id}`]}
      </label>
      <input
        ref={inputRef}
        id={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type}
        placeholder={t[`${props.placeholder}`]}
        value={value}
        readOnly={props.readonly || false}
        onChange={inputChangeHandler}
        autoComplete={props.autocomplete || "off"}
        className="w-full py-4 px-6 border-[1px] border-gainsboro bg-palette-card outline-none rounded-lg shadow-md"
        title={props.title}
        required={props.required || false}
      />
    </div>
  );
});

Input.displayName = "Input";
export default Input;

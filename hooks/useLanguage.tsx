import { useRouter } from "next/router";
import en from "../locales/en";
import fa from "../locales/fa";

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  return { t, locale };
};

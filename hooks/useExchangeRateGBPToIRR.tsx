import { useEffect, useState } from "react";
import { irrCurrencyFormat } from "../utilities/currencyFormat";

const API_KEY = "230967b967bfa5f86ca99d6c";
const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/GBP/IRR`;

export const useExchangeRateGBPToIRR = (price: number) => {
  const [exchangePrice, setExchangePrice] = useState<number>(0);
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const result = await fetch(`${URL}/${price}`);
        const data = await result.json();
        const irToman = Math.floor(data.conversion_result / 1000) * 1000; //common currency in Iran
        setExchangePrice(irToman);
      } catch (e) {
        console.log("Some thing is wrong in fetch data");
      }
    };
    if (price > 0) {
      fetchExchangeRate();
    }
  }, [price]);

  return irrCurrencyFormat(exchangePrice);
};

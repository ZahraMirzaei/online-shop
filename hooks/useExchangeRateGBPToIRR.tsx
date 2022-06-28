import { useEffect, useState } from "react";
import { irrCurrencyFormat } from "../utilities/currencyFormat";

const API_KEY = "230967b967bfa5f86ca99d6c";
const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/GBP/IRR`;

export const useExchangeRateGBPToIRR = (price: number) => {
  const [exchangePrice, setExchangePrice] = useState<number>(0);
  const hardRateExchange = 52230.27; // each Pound into Rial
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const result = await fetch(`${URL}/${price}`);
        if (result.ok) {
          const data = await result.json();
          const irToman = Math.floor(data.conversion_result / 1000) * 1000; //common currency in Iran
          setExchangePrice(irToman);
        } else {
          const priceWithHardRateExchange = price * hardRateExchange;
          const irToman = Math.floor(priceWithHardRateExchange / 1000) * 1000;
          setExchangePrice(irToman);
          throw new Error();
        }
      } catch (e) {
        console.log(
          `⚠ Error: the server responded with a status of 429 ()=> free account has reached the number of requests allowed by free plan and price exchange is based on hard number`
        );
      }
    };
    if (price > 0) {
      // fetchExchangeRate();
      const priceWithHardRateExchange = price * hardRateExchange;
      const irToman = Math.ceil(priceWithHardRateExchange / 1000) * 1000;
      setExchangePrice(irToman);
    }
  }, [price]);

  return irrCurrencyFormat(exchangePrice);
};

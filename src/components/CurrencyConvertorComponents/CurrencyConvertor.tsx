import React, { useEffect, useState } from 'react';
import { Block } from './Block.tsx';
import { RatesType } from '../../shared/lib/types.ts';

export const CurrencyConvertor: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);
  //const [rates, setRates] = useState<RatesType | {}>({});
  const ratesRef = React.useRef<RatesType | {} | string>({});
  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then((res) => res.json())
      .then((json) => {
        ratesRef.current = {
          RUB: 1,
          USD: json.rates['USD'],
          EUR: json.rates['EUR'],
          GBP: json.rates['GBP'],
        };
        console.log(ratesRef);
        onChangeToPrice(1);
      })
      .catch((error) => {
        alert('Не удалось получить данные. Ошибка: ' + error);
      });
  }, []);

  const onChangeFromPrice = (value: number) => {
    // @ts-ignore
    const price = value / ratesRef.current[fromCurrency];
    const result =
      //@ts-ignore
      Math.round(price * ratesRef.current[toCurrency] * 1000) / 1000;
    setToPrice(result);
    setFromPrice(value);
  };
  const onChangeToPrice = (value: number) => {
    const result =
      Math.round(
        //@ts-ignore
        (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) *
          value *
          1000
      ) / 1000;
    setFromPrice(result);
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <>
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </>
  );
};

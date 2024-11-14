import React, { useEffect, useState } from 'react';
import { Block } from './Block.tsx';
import { types } from 'sass';
import Error = types.Error;

export const CurrencyConvertor: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((error) => {
        alert('Не удалось получить данные. Ошибка: ' + error);
      });
  }, []);

  const onChangeFromPrice = (value: number) => {
    const price = value / rates;
    setFromPrice(value);
  };
  const onChangeToPrice = (value: number) => {
    setToPrice(value);
  };

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

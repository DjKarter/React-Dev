import React, { useEffect, useState } from 'react';
import { ShoppingList } from '../../components/useStateComponents/ShoppingList.tsx';
import { products } from '../../shared/lib/consts.ts';
import './UseStatePage.css';
import { MyButton } from '../../components/useStateComponents/MyButton.tsx';

export const UseStatePage: React.FC = () => {
  {
    /* Обновление экрана */
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleCountClick() {
    setCount(count + 1);
  }

  useEffect(function () {
    let timer = setInterval(function () {
      setCount2((count2) => count2 + 1);
      setCount2((count2) => count2 + 1);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  });

  useEffect(function () {
    let timer = setInterval(function () {
      setCount1(count1 + 1);
      setCount1(count1 + 1);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className={'main-div'}>
        {/* Условный рендеринг */}
        <button
          className={'classic-bottom'}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          State Changer
        </button>
        <div className={'classic-bottom normal-font'}>
          {isLoggedIn ? <div>1 State </div> : <div>2 State</div>}
        </div>

        {/* Рендеринг списков */}
        <ShoppingList products={products}></ShoppingList>

        {/* Различные состояния кликеров */}
        <div> Различные значения кликеров</div>
        <MyButton count={null} onClick={() => {}} />
        <MyButton count={null} onClick={() => {}} />

        {/* Одинаковые состояния кликеров */}
        <div> Одинаковые значения кликеров</div>
        <MyButton count={count} onClick={handleCountClick} />
        <MyButton count={count} onClick={handleCountClick} />

        {/* Плохой useEffect*/}
        <div>Увеличение на 2 через обычный useEffect</div>
        <div>The counter is set to: {count1}</div>
        {/* Правильный useEffect*/}
        <div>Увеличение на 2 через callback useEffect</div>
        <div>The counter is set to: {count2}</div>
      </div>
    </>
  );
};

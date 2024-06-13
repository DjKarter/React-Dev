import './MainPage.css';
import React, { useState } from 'react';
import { UseStatePage } from '../UseStatePage/UseStatePage.tsx';
import { BackButton } from '../../components/BackButton.tsx';
import { TicTacToePage } from '../TicTacToe/TicTacToe.tsx';
import { ProductTablePage } from '../ProductTablePage/ProductTablePage.tsx';

export const MainPage: React.FC = () => {
  const [mainPage, setMainPage] = useState(true);

  const [useStatePage, setUseStatePage] = useState(false);
  const [ticTacToePage, setTicTacToePage] = useState(false);
  const [productTablePage, setProductTablePage] = useState(false);

  const handleBackButton = () => {
    setUseStatePage(false);
    setTicTacToePage(false);
    setProductTablePage(false);
    setMainPage(true);
  };

  return (
    <>
      <BackButton onClick={handleBackButton}></BackButton>
      <image></image>
      {mainPage && (
        <ul className={'main-ul'}>
          <li>
            <button
              onClick={() => {
                setUseStatePage(!useStatePage);
                setMainPage(!mainPage);
              }}
            >
              1) useState.
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setTicTacToePage(!ticTacToePage);
                setMainPage(!mainPage);
              }}
            >
              2) Tic-Tac-Toe.
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setProductTablePage(!productTablePage);
                setMainPage(!mainPage);
              }}
            >
              3) Product Table.
            </button>
          </li>
        </ul>
      )}
      {useStatePage && <UseStatePage />}
      {ticTacToePage && <TicTacToePage />}
      {productTablePage && <ProductTablePage />}
    </>
  );
};

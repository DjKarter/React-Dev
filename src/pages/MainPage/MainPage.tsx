import './MainPage.css';
import React, { useState } from 'react';
import { UseStatePage } from '../UseStatePage/UseStatePage.tsx';
import { BackButton } from '../../components/BackButtonComponent/BackButton.tsx';
import { TicTacToePage } from '../TicTacToe/TicTacToe.tsx';
import { ProductTablePage } from '../ProductTablePage/ProductTablePage.tsx';
import { ModalPage } from '../ModalPage/ModalPage..tsx';

export const MainPage: React.FC = () => {
  const [mainPage, setMainPage] = useState(true);

  const [useStatePage, setUseStatePage] = useState(false);
  const [ticTacToePage, setTicTacToePage] = useState(false);
  const [productTablePage, setProductTablePage] = useState(false);
  const [modalPage, setModalPage] = useState(false);

  const handleBackButton = () => {
    setUseStatePage(false);
    setTicTacToePage(false);
    setProductTablePage(false);
    setModalPage(false);
    setMainPage(true);
  };

  const createListElement = (
    // eslint-disable-next-line no-unused-vars
    setPage: (b: boolean) => void,
    StatePage: boolean,
    text: string
  ) => {
    return (
      <li>
        <button
          onClick={() => {
            setPage(!StatePage);
            setMainPage(!mainPage);
          }}
        >
          {text}
        </button>
      </li>
    );
  };

  return (
    <>
      <BackButton onClick={handleBackButton}></BackButton>
      {mainPage && (
        <ul className={'main-ul'}>
          {createListElement(setUseStatePage, useStatePage, 'useState')}
          {createListElement(setTicTacToePage, ticTacToePage, 'Tic-Tac-Toe')}
          {createListElement(
            setProductTablePage,
            productTablePage,
            'Product Table'
          )}
          {createListElement(setModalPage, modalPage, 'Modal')}
        </ul>
      )}
      {useStatePage && <UseStatePage />}
      {ticTacToePage && <TicTacToePage />}
      {productTablePage && <ProductTablePage />}
      {modalPage && <ModalPage />}
    </>
  );
};

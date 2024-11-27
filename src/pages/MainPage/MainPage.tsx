import './MainPage.css';
import React, { useState } from 'react';
import { UseStatePage } from '../UseStatePage/UseStatePage.tsx';
import { BackButton } from '../../components/BackButtonComponents/BackButton.tsx';
import { TicTacToePage } from '../TicTacToe/TicTacToe.tsx';
import { ProductTablePage } from '../ProductTablePage/ProductTablePage.tsx';
import { ModalPage } from '../ModalPage/ModalPage.tsx';
import { QuizPage } from '../QuizPage/QuizPage.tsx';
import { UsersPage } from '../UsersPage/UsersPage.tsx';
import { CurrencyConvertorPage } from '../CurrencyConvertorPage/CurrencyConvertorPage.tsx';

export const MainPage: React.FC = () => {
  const [mainPage, setMainPage] = useState(true);

  const [useStatePage, setUseStatePage] = useState(false);
  const [ticTacToePage, setTicTacToePage] = useState(false);
  const [productTablePage, setProductTablePage] = useState(false);
  const [modalPage, setModalPage] = useState(false);
  const [quizPage, setQuizPage] = useState(false);
  const [usersPage, setUsersPage] = useState(false);
  const [currencyConvertorPage, setCurrencyConvertorPage] = useState(false);

  const handleBackButton = () => {
    setUseStatePage(false);
    setTicTacToePage(false);
    setProductTablePage(false);
    setModalPage(false);
    setQuizPage(false);
    setUsersPage(false);
    setCurrencyConvertorPage(false);
    setMainPage(true);
  };

  const createListElement = (
    setPage: (b: boolean) => void,
    StatePage: boolean,
    text: string
  ) => {
    return (
      <li>
        <button
          className={'project-button'}
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
      {!mainPage && <BackButton onClick={handleBackButton}></BackButton>}
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
          {createListElement(setQuizPage, quizPage, 'Quiz')}
          {createListElement(setUsersPage, usersPage, 'Users')}
          {createListElement(
            setCurrencyConvertorPage,
            currencyConvertorPage,
            'Currency Convertor'
          )}
        </ul>
      )}
      {useStatePage && <UseStatePage />}
      {ticTacToePage && <TicTacToePage />}
      {productTablePage && <ProductTablePage />}
      {modalPage && <ModalPage />}
      {quizPage && <QuizPage />}
      {usersPage && <UsersPage />}
      {currencyConvertorPage && <CurrencyConvertorPage />}
    </>
  );
};

import React from 'react';
import { CurrencyConvertor } from '../../components/CurrencyConvertorComponents/CurrencyConvertor.tsx';
import './index.scss';

export const CurrencyConvertorPage: React.FC = () => {
  return (
    <div className={'CurApp'}>
      <CurrencyConvertor />
    </div>
  );
};

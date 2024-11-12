import React from 'react';
import backImage from '../shared/images/backButton.png';

interface ICSSButton {
  onClick(): void;
}

export const CSSButton: React.FC<ICSSButton> = ({ onClick }: ICSSButton) => {
  return (
    <>
      <img
        src={backImage}
        style={{
          position: 'absolute',
          height: '66px',
          width: '66px',
          left: '50px',
          top: '150px',
          cursor: 'pointer',
        }}
        alt={'На начальную страницу'}
        onClick={onClick}
      />
    </>
  );
};

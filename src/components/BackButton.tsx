import React from 'react';
import backImage from '../shared/images/backButton.png';

interface IBackButton {
  onClick(): void;
}

export const BackButton: React.FC<IBackButton> = ({ onClick }: IBackButton) => {
  return (
    <>
      <img
        src={backImage}
        style={{
          position: 'absolute',
          height: '66px',
          width: '66px',
          left: '50px',
          top: '50px',
          cursor: 'pointer',
        }}
        alt={'На начальную страницу'}
        onClick={onClick}
      />
    </>
  );
};

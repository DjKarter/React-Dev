import React from 'react';
import './/BackButton.css';

interface IBackButton {
  onClick(): void;
}

export const BackButton: React.FC<IBackButton> = ({ onClick }: IBackButton) => {
  return (
    <>
      <button onClick={onClick} className={'button'}>
        X
      </button>
    </>
  );
};

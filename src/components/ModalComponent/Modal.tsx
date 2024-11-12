import React, { useState } from 'react';
import './index.scss';
import { ModalWindow } from './ModalWindow.tsx';

export const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openAnimated, setOpenAnimated] = useState(false);

  return (
    <div className="App">
      {!open && !openAnimated && (
        <button className="open-modal-btn" onClick={() => setOpen(true)}>
          ✨ Открыть окно
        </button>
      )}
      {!openAnimated && !open && (
        <button
          className="open-modal-btn open-modal-btn-animated"
          onClick={() => setOpenAnimated(true)}
        >
          ✨ Открыть анимированное окно
        </button>
      )}
      {open && (
        <ModalWindow open={open} setOpen={setOpen} animated={false}>
          <img
            src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
            alt={'Вас не зарикролили'}
          />
        </ModalWindow>
      )}
      {
        <ModalWindow
          open={openAnimated}
          setOpen={setOpenAnimated}
          animated={true}
        >
          <img
            src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
            alt={'Вас не зарикролили'}
          />
        </ModalWindow>
      }
    </div>
  );
};

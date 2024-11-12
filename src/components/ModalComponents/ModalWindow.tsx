import React from 'react';

interface IModal {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (arg: boolean) => void;
  animated: boolean;
  children: any;
}

// eslint-disable-next-line no-unused-vars
export const ModalWindow: React.FC<IModal> = ({
  open,
  setOpen,
  animated,
  children,
}: IModal) => (
  <div
    className={`overlay ${animated ? 'animated' : ''} ${animated && open ? 'show' : ''} `}
  >
    <div className="modal">
      <svg
        height="200"
        viewBox="0 0 200 200"
        width="200"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>
);

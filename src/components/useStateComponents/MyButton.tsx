import React, { useState } from 'react';

interface IMyButton {
  count: number | null;
  onClick(): void;
}
export const MyButton: React.FC<IMyButton> = ({
  count = null,
  onClick = () => {},
}: IMyButton) => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <button onClick={count === null ? handleClick : onClick}>
      Clicked {count === null ? counter : count} times
    </button>
  );
};

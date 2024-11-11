import React, { useEffect, useState } from 'react';

//Тут вывод множества одинаковых компонент

function Counter({ init, end }: { init: number; end: number }) {
  const [count, setCount] = useState(init);
  useEffect(() => {
    if (end && count >= end) {
      return;
    }

    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      Initial value of the counter is: {init}
      <br />
      End of the counter at: {end}
      <br />
      The counter is: {count}
      <br />
      {end && count >= end ? (
        <b style={{ color: 'red', fontSize: '20px' }}>Counter stopped</b>
      ) : (
        <i>Counter in progress</i>
      )}
    </>
  );
}

export const DayTwo: React.FC = () => {
  return (
    <>
      {[...Array(5).keys()].slice(2).map((i) => {
        return (
          <React.Fragment key={i}>
            Counter {i} defined by {`<Counter init=5 end='${10 + i}' />`} :
            <br />
            <Counter init={5} end={10 + i} />
            <br />
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
};

import React from 'react';

export const Result: React.FC<{
  correct: number;
  questionsNumber: number;
  // eslint-disable-next-line no-unused-vars
  setStep: (step: number) => void;
  // eslint-disable-next-line no-unused-vars
  setCorrect: (correct: number) => void;
}> = ({ correct, questionsNumber, setStep, setCorrect }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt={'Well done'}
      />
      <h2>
        Ваш результат: {correct} из {questionsNumber}
      </h2>
      <button
        onClick={() => {
          setStep(0);
          setCorrect(0);
        }}
      >
        Попробовать снова
      </button>
    </div>
  );
};

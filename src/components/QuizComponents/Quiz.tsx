import React from 'react';
import './index.scss';
import { Game } from './Game.tsx';
import { quizQuestions } from '../../shared/lib/consts.ts';

import { Result } from './Result.tsx';
import { QuestionType } from '../../shared/lib/types.ts';

export const Quiz: React.FC = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = quizQuestions[step] as QuestionType;

  const onClickVariant = (index: number) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className={'QuizApp'}>
      {step !== quizQuestions.length ? (
        <Game
          percentage={Math.round((step / quizQuestions.length) * 100)}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result
          correct={correct}
          questionsNumber={quizQuestions.length}
          setStep={setStep}
          setCorrect={setCorrect}
        />
      )}
    </div>
  );
};

import React from 'react';
import { QuestionType } from '../../shared/lib/types.ts';

export const Game: React.FC<{
  percentage: number;
  question: QuestionType;
  // eslint-disable-next-line no-unused-vars
  onClickVariant: (index: number) => void;
}> = ({ percentage, question, onClickVariant }) => {
  return (
    <div>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

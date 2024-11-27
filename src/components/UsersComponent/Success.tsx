import React from 'react';

export const Success: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="success-block">
      <img
        src={`${import.meta.env.BASE_URL}src/shared/images/success.svg`}
        alt="Success"
      />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};

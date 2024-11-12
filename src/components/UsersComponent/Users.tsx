import React, { ChangeEvent } from 'react';
import './index.scss';
import { User } from './User.tsx';
import { Skeleton } from './Skeleton.tsx';
import { UserDataType } from '../../shared/lib/types.ts';

// Тут список пользователей: https://reqres.in/api/users

export const Users: React.FC<{
  searchValue: string;
  onChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  items: UserDataType[];
  isLoading: boolean;
  invites: number[];
  onClickInvite: (id: number) => void;
  onClickSendInvites: ()=>void;
}> = ({
  searchValue,
  onChangeSearchValue,
  items,
  isLoading,
  invites,
  onClickInvite,
                            onClickSendInvites
}) => {
  return (
    <>
      <div className={'UsersApp '}>
        <div className="search">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <input
            value={searchValue}
            onChange={onChangeSearchValue}
            type="text"
            placeholder="Найти пользователя..."
          />
        </div>
        {isLoading ? (
          <div className="skeleton-list">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <ul className="users-list">
            {items
              .filter((obj) => {
                if (
                  (obj.first_name + obj.last_name)
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  obj.email.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
              })
              .map((data) => (
                <User
                  onClickInvite={onClickInvite}
                  isInvited={invites.includes(data.id)}
                  key={data.id}
                  {...data}
                />
              ))}
          </ul>
        )}
        {invites.length > 0 && <button onClick={onClickSendInvites} className="send-invite-btn">Отправить приглашение</button>}
      </div>
    </>
  );
};

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Users } from '../../components/UsersComponent/Users.tsx';
import {Success} from "../../components/UsersComponent/Success.tsx";

// Тут список пользователей: https://reqres.in/api/users

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([] as number[]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        alert('Ошибка загрузки данных ' + error);
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue((event.target as HTMLInputElement).value);
  };

  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      setInvites((prevState) => prevState.filter((_id) => _id !== id));
    } else {
      setInvites((prevState) => [...prevState, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <>
      {success ? (
        <Success count={invites.length}/>
      ) : (
        <Users
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </>
  );
};

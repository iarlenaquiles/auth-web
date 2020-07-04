import React, { useState, useEffect, useCallback } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import * as S from './styles';
import Users from '../../components/Users';


export default function Dashboard() {
  const [users, setUsers] = useState([]);

  const initUsers = useCallback(async () => {
    const response = await api.get(`users`);

    setUsers(response.data.users);
  }, []);

  useEffect(() => {
    initUsers();
  }, [initUsers]);

  async function handleDelete(id) {
    await api.delete(`/users/${id}`);
    initUsers();
  }

  return (
    <S.Container>
      <header>
        <strong>Usuários cadastrados</strong>
        <Link to="/users/create">
          <button type="button">
            <MdAddCircleOutline color="#fff" size={20} />
            Adicionar usuario
          </button>
        </Link>
      </header>
      <br />
      <br />
      <Users users={users} onDelete={handleDelete} />
    </S.Container>
  );
}

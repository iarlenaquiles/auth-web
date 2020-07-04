import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions'
import * as S from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <S.Container>
      <S.Content>
        <nav>
          <Link to="/dashboard">Usuários</Link>
        </nav>

        <aside>
          <div>
            <button onClick={handleSignOut}>Sair</button>
          </div>
        </aside>
      </S.Content>
    </S.Container>
  )
}

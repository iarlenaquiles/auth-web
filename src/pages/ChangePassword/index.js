import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import * as qs from 'query-string';
import { changeRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  newPassword:  Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A Senha é obrigatória'),
  verifyPassword: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A Senha é obrigatória'),
});

export default function ChangePassword({ location }) {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  useEffect(() => {
    const parsed = qs.parse(location.search);
    setToken(parsed.token)
  }, []);

  function handleSubmit({ newPassword, verifyPassword }) {
    dispatch(changeRequest(newPassword, verifyPassword, token));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="newPassword" type="password" placeholder="Sua nova senha" />
        <Input name="verifyPassword" type="password" placeholder="Confirmação da sua nova senha" />

        <button type="submit">Trocar senha</button>
      </Form>
    </>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { resetRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório')
});

export default function ResetPassword() {
  const dispatch = useDispatch();

  function handleSubmit({ email }) {
    dispatch(resetRequest( email));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <button type="submit">Enviar e-mail de recuperação</button>
      </Form>
    </>
  );
}

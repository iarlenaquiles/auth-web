import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

function UserForm({ onSubmit, user }) {
 async function handleSubmit(value) {
  await onSubmit(value);
 }

  return (
    <Form initialData={user} onSubmit={handleSubmit}>

      <label htmlFor="fullname">Nome completo</label>
      <Input
        name="fullname"
        id="fullname"
        required
      />

      <label htmlFor="email">E-mail</label>
      <Input
        name="email"
        id="email"
        required
      />

      {!user && (
        <>
          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            id="password"
            type="password"
            required
          />
        </>
      )}

      <button type="submit">Salvar</button>
    </Form>



  );
}

export default UserForm;

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


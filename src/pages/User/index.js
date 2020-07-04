import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";

import { Container } from './styles';
import api from '../../services/api';
import UserForm from '../../components/UserForm';

export default function User({ history }) {
  const location = useLocation();
  const user = location.state;

  async function handleSubmit(value) {
    try {
      if (user) {
        await api.put(`/users/${user._id}`, { ...value });

        history.push('/dashboard');
      } else {
        await api.post(`/users`, { ...value });

        history.push('/dashboard');
      }
    } catch (error) {
      console.tron.log(error);
      toast.error(`Error na criação do usuário`);
    }
  }
  return (
    <Container>
     <UserForm onSubmit={handleSubmit} user={user} />
    </Container>
  );
}

User.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

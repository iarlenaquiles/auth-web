import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Types from './types';

import api from '../../../services/api';
import history from '../../../services/history';

import { signFailure, signInSuccess, resetSuccess, resetFailure, changeSuccess, changeFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user, token));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');

    yield put(signFailure());
  }
}

export function* resetPassword({ payload }) {
  try {
    const { email } = payload;

    const response = yield call(api.post, 'forgot', {
      email
    });

    const { message } = response.data;

    yield put(resetSuccess(message));
    toast.success('Verifique sua caixa de email');
    history.push('/');
  } catch (error) {
    toast.error('Verifique o email digitado');

    yield put(resetFailure());
  }
}

export function* changePassword({ payload }) {
  try {
    const { newPassword, verifyPassword, token } = payload;

    const response = yield call(api.post, 'reset', {
      newPassword,
      verifyPassword,
      token
    });

    const { message } = response.data;

    yield put(changeSuccess(message));
    toast.success('Senha modificada');
    history.push('/');
  } catch (error) {
    toast.error('erro ao modificar a senha');

    yield put(changeFailure());
  }
}


export function* signUp({ payload }) {
  try {
    const { fullname, email, password } = payload;

    yield call(api.post, '/users', {
      fullname,
      email,
      password
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if(!payload) return;

  const { token } = payload.auth;

  if(token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest(Types.SIGN_IN_REQUEST, signIn),
  takeLatest(Types.SIGN_UP_REQUEST, signUp),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Types.SIGN_OUT, signOut),
  takeLatest(Types.RESET_REQUEST, resetPassword),
  takeLatest(Types.CHANGE_REQUEST, changePassword)
]);

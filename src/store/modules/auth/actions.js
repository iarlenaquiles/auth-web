import Types from './types';

export function signInRequest(email, password) {
  return {
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password }
  };
}

export function resetRequest(email) {
  return {
    type: Types.RESET_REQUEST,
    payload: { email }
  };
}

export function signInSuccess(user, token) {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: { user, token }
  };
}

export function resetSuccess(message) {
  return {
    type: Types.RESET_SUCCESS,
    payload: { message }
  };
}

export function signUpRequest(fullname, email, password) {
  return {
    type: Types.SIGN_UP_REQUEST,
    payload: { fullname, email, password }
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function resetFailure() {
  return {
    type: '@auth/RESET_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

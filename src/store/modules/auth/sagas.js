import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    // Add the token to api header
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    if (err.response) {
      toast.error(`Error: ${err.response.data.error}`);
      console.tron.error(err.response.data.error);
    } else {
      toast.error(
        "Authentication failure! e-mail and/or password doesn't match!"
      );
      console.tron.error(err);
    }

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
    toast.success('Your account was successfully created!');
  } catch (err) {
    if (err.response) {
      toast.error(`Error: ${err.response.data.error}`);
      console.tron.error(err.response.data.error);
    } else {
      toast.error('Register failure! Verify your data!');
      console.tron.error(err);
    }

    // Log the error if any

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    // Add the token to api header
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

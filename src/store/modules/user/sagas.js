import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, '/users', profile);

    toast.success('Profile successfully updated!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    if (err.response.data.error) {
      toast.error(`Error: ${err.response.data.error}`);
      console.tron.error(err.response.data.error);
    } else {
      toast.error('Unable to update profile, verify your data!');
      console.tron.error(err);
    }

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

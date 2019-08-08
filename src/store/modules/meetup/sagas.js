import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';

import {
  updateMeetupSuccess,
  updateMeetupFailure,
  addMeetupSuccess,
  addMeetupFailure,
} from './actions';

// ////////////////////////////////////////////////////////////////////////////
// Select a meetup
//
export function selectMeetup() {
  history.push('/details');
}

// ////////////////////////////////////////////////////////////////////////////
// Update an existant meetup
//
export function* updateMeetup({ payload }) {
  try {
    const { id, title, description, location, date, banner_id } = payload;

    yield call(api.put, `meetups/${id}`, {
      title,
      description,
      location,
      date,
      banner_id,
    });

    const response = yield call(api.get, `mymeetups/${id}`);

    if (response.data[0]) {
      const updatedMeetup = response.data[0];

      // Format the date before store it
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const compareDate = utcToZonedTime(updatedMeetup.date, timezone);
      updatedMeetup.formattedDate = format(
        compareDate,
        "d 'de' MMMM', às 'H'h'",
        { locale: pt }
      );

      toast.success('Meetup successfully updated!');
      yield put(updateMeetupSuccess(updatedMeetup));
      history.push('/details');
    } else {
      // if the response didn't come as expected.
      toast.error('Unable to update the meetup! Verify your data!');
      console.tron.error(response);
      yield put(updateMeetupFailure());
    }
  } catch (err) {
    if (err.response.data.error) {
      toast.error(`Error: ${err.response.data.error}`);
    } else {
      toast.error('Unable to update the meetup! Verify your data!');
    }

    // Log the error if any
    console.tron.error(err.response.data.error);
    yield put(updateMeetupFailure());
  }
}

// ////////////////////////////////////////////////////////////////////////////
// Create a new meetup
//
export function* addMeetup({ payload }) {
  try {
    const { title, description, location, date, banner_id } = payload;

    console.tron.warn(payload);

    yield call(api.post, `meetups`, {
      title,
      description,
      location,
      date,
      banner_id,
    });

    toast.success('Meetup successfully created!');
    yield put(addMeetupSuccess());
    history.push('/dashboard');
  } catch (err) {
    toast.error('Unable to create the meetup! Verify meetup data!');

    // Log the error if any
    console.tron.error(err);
    yield put(addMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/SELECT_MEETUP_REQUEST', selectMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/ADD_MEETUP_REQUEST', addMeetup),
]);

import { takeLatest, all } from 'redux-saga/effects';
import history from '~/services/history';

export function selectMeetup() {
  history.push('/details');
}

export default all([takeLatest('@meetup/SELECT_MEETUP_REQUEST', selectMeetup)]);

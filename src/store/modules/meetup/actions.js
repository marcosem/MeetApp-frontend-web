export function selectMeetupRequest(data) {
  return {
    type: '@meetup/SELECT_MEETUP_REQUEST',
    payload: data,
  };
}

export function unselectMeetupRequest() {
  return {
    type: '@meetup/UNSELECT_MEETUP_REQUEST',
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: data,
  };
}

export function updateMeetupSuccess(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: data,
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}

export function addMeetupRequest(data) {
  return {
    type: '@meetup/ADD_MEETUP_REQUEST',
    payload: data,
  };
}

export function addMeetupSuccess() {
  return {
    type: '@meetup/ADD_MEETUP_SUCCESS',
  };
}

export function addMeetupFailure() {
  return {
    type: '@meetup/ADD_MEETUP_FAILURE',
  };
}

export function cancelMeetupRequest(id, title) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: { id, title },
  };
}

export function cancelMeetupSuccess() {
  return {
    type: '@meetup/CANCEL_MEETUP_SUCCESS',
  };
}

export function cancelMeetupFailure() {
  return {
    type: '@meetup/CANCEL_MEETUP_FAILURE',
  };
}

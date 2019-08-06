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

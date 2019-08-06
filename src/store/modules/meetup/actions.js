export function selectMeetupRequest(data) {
  return {
    type: '@meetup/SELECT_MEETUP_REQUEST',
    payload: data,
  };
}

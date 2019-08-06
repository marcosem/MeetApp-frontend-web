import produce from 'immer';

const INITIAL_STATE = {
  selectedMeetup: {},
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/SELECT_MEETUP_REQUEST': {
        draft.selectedMeetup = action.payload;
        break;
      }

      case '@meetup/UNSELECT_MEETUP_REQUEST': {
        draft.selectedMeetup = null;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.selectedMeetup = null;
        break;
      }

      default:
    }
  });
}

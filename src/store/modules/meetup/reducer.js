import produce from 'immer';

const INITIAL_STATE = {
  selectedMeetup: {},
  loading: false,
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

      case '@meetup/UPDATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.selectedMeetup = action.payload;
        draft.loading = false;
        break;
      }

      case '@meetup/UPDATE_MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@meetup/ADD_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@meetup/ADD_MEETUP_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@meetup/ADD_MEETUP_FAILURE': {
        draft.loading = false;
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

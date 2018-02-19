import { toast } from 'react-toastify';

const initialState = {
  note: {}
};

const errorMessage = 'Error occurred, Please try again later.';

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'LOAD_NOTES_SUCCESS':
      return {
        ...state,
        note: payload.data
      };
    case 'LOAD_NOTES_ERROR':
      toast.error(errorMessage);
      return state;
    case 'SAVE_NOTES_SUCCESS':
      toast.success('Saved');
      return state;
    case 'SAVE_NOTES_ERROR':
      toast.error(errorMessage);
      return state;
    case 'CHANGE_NOTES':
      return {
        ...state,
        note: {
          ...state.note,
          notes: payload
        }
      };
    default:
      return state;
  }
}

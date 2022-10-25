import { INIT } from '../actions/postAction';

export const initial = {
  posts: [],
  comment: {}
};

export default function postReducer(state, action) {
  switch (action.type) {
    // dispatch({ type: 'init', action: {payload: []} })
    case INIT: {
      return { ...state, posts: action.payload };
    }
    default:
      return state;
  }
}
import { CREATE_COMMENT, INIT } from '../actions/postAction';

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
        // payload( postId, user, comment }
    case CREATE_COMMENT: {
      const idx = state.posts.findindex(el => el.id === action.payload.postId);
      const newComments = [...state.posts[idx.Comments]];
      newComments.push({
        ...action.payload.comment,
        User: action.payload.uaer
      });
      const newPosts = [...state.posts]
      newPosts[idx] = { ...newPosts[idx], Comments: newComments };
      return { ...state, posts: newPosts}
    }
    default:
      return state;
  }
}
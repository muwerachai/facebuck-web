import { createContext, useContext, useEffect, useReducer } from 'react';
import { initPost } from '../actions/postAction';
import { getAllPost } from '../api/post';
import postReducer, { initial } from '../reducers/postReducer';

const PostContext = createContext();

function PostContextProvider({ children }) {
  const[{posts, commentMapping},dispatch] = useReducer(
    postReducer, 
    initial
    );
   
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getAllPost();
        dispatch(initPost(res.data.posts));
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);
  
    return (
      <PostContext.Provider value={{ posts, dispatch }}>
        {children}
      </PostContext.Provider>
    );
  }
  
  export default PostContextProvider;

  function usePost() {
    const ctx = useContext(PostContext);
    return ctx;
  }
  
  export { usePost };
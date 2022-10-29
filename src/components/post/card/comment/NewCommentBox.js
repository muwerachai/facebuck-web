import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createCommentAction } from '../../../../actions/postAction';
import { createComment } from '../../../../api/post';
import { useAuth } from '../../../../contexts/AuthContext';
import { useError } from '../../../../contexts/ErrorContext';
import { usePost } from '../../../../contexts/PostContext';
import UserIcon from '../../../common/UserIcon';

function NewCommentBox({ postId }) {
  const [title, setTitle] = useState('');
  const { user } = useAuth();
  const { id, profilePic } = user;
  const { dispatch } = usePost();
  const { setError } = useError();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await createComment(title, postId);
      dispatch(
        createCommentAction({ comment: res.data.comment, postId, user })
      );
      setTitle('');
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="d-flex pt-1">
      <Link to={'/profile/' + id}>
        <UserIcon src={profilePic} size="32" />
      </Link>
      <form className="flex-grow-1 ms-2" onSubmit={handleSubmit}>
        <input
          className="form-control rounded-pill shadow-none border-0 bg-gray-200 focus-bg-gray-200 h-9 text-3.5"
          placeholder="Write a comment..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

export default NewCommentBox;
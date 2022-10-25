import { useContext, useEffect, useState } from 'react';
import { createPost } from '../../../api/post';
import { AuthContext } from '../../../contexts/AuthContext';
import SavePostButton from "./SavePostButton";
import TextArea from "./TextArea";
import UploadImage from "./UploadImage";
import Spinner from '../../common/Spinner';


function PostForm({open, onClose}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle('');
    setImage(null);
  }, [open]);

  const handleClickSavePost = async () => {
    try {
      setLoading(true);
      // validate
      await createPost(title, image);
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

    return (
        <>
              {loading && <Spinner />}
       <TextArea
        placeholder={`What's on your mind, ${user.firstName}?`}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
   <UploadImage
        value={image}
        onChange={e => {
          console.log(e.target.files[0]);
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
        onDelete={() => setImage(null)}
      />        
      <SavePostButton onClick={handleClickSavePost} />
            </>
            );
            }
            export default PostForm;

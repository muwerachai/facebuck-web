import defaultProfilePic from '../../assets/images/profileImg.png';

function UserCard({ src }) {
  return (
    <img
      src={src || defaultProfilePic}
      className="card-img-top rounded-t-lg"
      alt="user"
    />
  );
}

export default UserCard;
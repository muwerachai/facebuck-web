import { useLocation } from 'react-router-dom';
import FriendCard from './FriendCard';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

const getTitle = pathname => {
  switch (pathname) {
    case '/friend/request':
      return 'Friend Requests';
    case '/friend/suggestion':
      return 'Suggestions';
    default:
      return 'All Friends';
  }
};

const fetchUser = pathname => {
  switch (pathname) {
    case '/friend/request':
      return axios.get('/friends?status=pending');
    case '/friend/suggestion':
      return axios.get('/friends?status=unknown');
    default:
      return axios.get('/friends');
  }
};

function FriendContainer() {
  const { pathname } = useLocation();
  const [friends, setFriends] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetchUser(pathname);
      setFriends(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);

  return (
    <div
      className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5"
      style={{ width: 'calc(100% - 360px)' }}
    >
      <h1 className="text-5 mb-3 fw-bold">{getTitle(pathname)}</h1>
      <div className="row g-2">
        {friends.map(el => (
          <FriendCard key={el.id} friend={el} fetchData={fetchData} />
        ))}
      </div>
    </div>
  );
}

export default FriendContainer;
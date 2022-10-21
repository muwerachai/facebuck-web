import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { getAccessToken, removeAccessToken, setAccessToken } from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try{
        const token = getAccessToken();
        if (token){
          const resMe = await axios.get('/users/me');
          setUser(resMe.data.user);
        }
      }catch(err){
      removeAccessToken();
      navigate('/login');
      }
    
    };
    fetchMe();
  }, []);

  const signUp = async input => {
    const res = await axios.post('/auth/signup', input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const login = async (emailOrPhone, password) => {
    const res = await axios.post('/auth/login', { emailOrPhone, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
}

const logout = () => {
  removeAccessToken();
  setUser(null);
}
  return (
    <AuthContext.Provider value={{ signUp, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
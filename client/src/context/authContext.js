import React from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem('user') || null),
  );

  const login = async (inputs) => {
    const res = await axios.post('/auth/login', inputs);
    console.log('res', res.data);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post('/auth/logout');
    setCurrentUser(null);
  };

  React.useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

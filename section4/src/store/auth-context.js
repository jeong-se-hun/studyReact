import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: (email, password) => {},
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserloggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserloggedInInfo === '1') setIsLoggedIn(true);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

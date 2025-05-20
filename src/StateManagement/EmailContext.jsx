import { createContext, useState, useEffect, useContext } from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('email', email);
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [email, isAuthenticated]);


  const logout = () => {
    setEmail('');
    setIsAuthenticated(false);
    localStorage.removeItem('email');
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <EmailContext.Provider value={{ email, setEmail, isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = () => useContext(EmailContext);

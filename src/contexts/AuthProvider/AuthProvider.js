import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContents = useFirebase();
  return (
    <div>
      <AuthContext.Provider value={allContents}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

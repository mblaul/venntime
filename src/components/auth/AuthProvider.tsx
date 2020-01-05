import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import fire from '../../fire';
import { useStateValue } from '../../state';

const AuthProvider: React.FC = ({ children }) => {
  const [ appState, dispatch ] = useStateValue();
  const [ user, initialising, error ] = useAuthState(fire.auth());
  
  if (initialising && !appState.isLoginPending) {
    dispatch({
      type: 'LOGIN_USER_PENDING',
    });
  }

  if (user && !appState.user) {
    dispatch({
      type: 'LOGIN_USER',
      user,
    });
  }

  if (!user && appState.user) {
    dispatch({
      type: 'LOGOUT_USER',
    });
  }

  return (
    <>
      {initialising ? (
        <div>Loading...</div>
      ) : (
        children
      )}
      
    </>
  );
};

export default AuthProvider;

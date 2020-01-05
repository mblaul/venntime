import React, { Fragment } from 'react';

import fire from '../../fire';
import { useStateValue } from '../../state';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthProvider: React.FC = ({ children }) => {
  const [ appState, dispatch ] = useStateValue();
  const [ user, initialising, error ] = useAuthState(fire.auth());
  
  console.log(user);
  console.log(appState.user);
  if (user && !appState.user) {
    dispatch({
      type: 'LOGIN_USER',
      user,
    });
  }

  if (appState.user && !user) {
    dispatch({
      type: 'LOGOUT_USER',
    });
  }

  return (
    <>
      {children}
    </>
  );
};

// @ts-ignore
AuthProvider.whyDidYouRender = true

export default AuthProvider;

import React from 'react';

import fire from '../../fire';
import { authState } from 'rxfire/auth';
import { filter } from 'rxjs/operators';
import { useStateValue } from '../../state';

const AuthProvider: React.FC = ({ children }) => {
  const [ appState, dispatch ] = useStateValue();

  authState(fire.auth()).pipe(filter(user => user !== null)).subscribe(user => {
    console.log(appState);
    // if (!appState.isAuthenticated) {
    //   dispatch({
    //     type: 'SET_AUTH',
    //     auth: { 
    //       isAuthenticated: true,
    //       user,
    //     },
    //   });
    // }
  });

  return (
    <>
      {children}
    </>
  );
};

export default AuthProvider;

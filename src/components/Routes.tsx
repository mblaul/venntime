import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useStateValue } from '../state';

import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import PrivateRoute from '../components/PrivateRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';

/* Pages */
import Home from '../pages/Home';
import Auth from '../pages/Auth';

const Routes: React.FC = () => {
  const [ { isAuthenticated, isLoginPending } ] = useStateValue();

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />

        {/* Routes for guest users only */}
        <Route exact path="/login" render={() => <Auth formType="login" />} />
        <Route exact path="/register" render={() => <Auth formType="register" />} />

        {/* If no matching route found redirect user to home or root */}
        <Route render={() => <Redirect to={isAuthenticated ? '/home' : '/'} />} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;

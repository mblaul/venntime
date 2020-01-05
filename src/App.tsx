import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { StateProvider } from './state';
import { reducer } from './reducers';

import { Redirect, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

/* Pages */
import Home from './pages/Home';
import Auth from './pages/Auth';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AuthProvider from './components/auth/AuthProvider';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const App: React.FC = () => {
  const initialState = {};

  return (
    <IonApp>
      <StateProvider initialState={initialState} reducer={reducer}>
        <AuthProvider>
          <IonReactRouter>
            <IonRouterOutlet>
              <PrivateRoute path="/home" component={Home} exact={true} />
              <Route path="/register" render={() => <Auth formType="register" />} exact={true} />
              <Route path="/login" render={() => <Auth formType="login" />} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonReactRouter>
        </AuthProvider>
      </StateProvider>
    </IonApp>
  );
};

export default App;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import PrivateRoute from './components/PrivateRoute';

import { StateProvider } from './state';
import { reducer } from './reducers';

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

const App: React.FC = () => {
  const initialState = {
    auth: {
      isAuthenticated: false,
    },
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AuthProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <PrivateRoute path="/home" component={Home} exact={true} />
              <Route path="/register" render={() => <Auth formType="register" />} exact={true} />
              <Route path="/login" render={() => <Auth formType="login" />} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </AuthProvider>
    </StateProvider>
  );
};

export default App;

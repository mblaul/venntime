import React from 'react';

import { IonApp } from '@ionic/react';

import { StateProvider } from './state';
import { reducer } from './reducers';

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
import Routes from './components/Routes';

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
          <Routes />
        </AuthProvider>
      </StateProvider>
    </IonApp>
  );
};

export default App;

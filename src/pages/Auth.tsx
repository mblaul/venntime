import React from 'react';
import { Redirect } from 'react-router';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonPage,
  IonRow,
} from '@ionic/react';

import { useStateValue } from '../state';

import startCase from 'lodash/startCase';
import AuthForm from '../components/auth/AuthForm';

type AuthProps = {
  formType: 'register' | 'login';
};

const Auth: React.FC<AuthProps> = ({ formType }) => {

  const [ appState, dispatch ] = useStateValue();
  
  if (appState.isAuthenticated) return <Redirect to="/home" />

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonRow className="ion-justify-content-center">
          <IonCol size-sm="12" size-md="8" size-xl="4">
            <IonRow className="ion-justify-content-center">
              <IonCardHeader>
                <IonCardTitle>{startCase(formType)}</IonCardTitle>
              </IonCardHeader>
            </IonRow>
            <IonCard className="ion-padding">
              <IonCardContent>
                <AuthForm formType={formType} />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Auth;

import React, { useState, FormEvent } from 'react';

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

import startCase from 'lodash/startCase';
import AuthForm from '../components/auth/AuthForm';

type AuthProps = {
  formType: 'register' | 'login';
};

const Auth: React.FC<AuthProps> = ({ formType }) => {
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
                <AuthForm formType={formType}/>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Auth;

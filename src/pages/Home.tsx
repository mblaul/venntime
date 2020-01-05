import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { MouseEvent } from 'react';

import fire from '../fire';

const Home: React.FC = () => {
  const handleClick = (event: MouseEvent) => {
    fire.auth().signOut().then(() => {}).catch(error => {
      // An error happened.
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton className="ion-margin-top" size="large" onClick={handleClick}>
          Sign Out
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

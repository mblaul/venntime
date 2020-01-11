import React, { MouseEvent } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';

import { add } from 'ionicons/icons';

import fire from '../fire';
import MeetUpsContainer from '../components/meetups/Container';

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
          <IonTitle>🏡 Home 🏡</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <MeetUpsContainer />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonButton className="ion-margin-top" size="large" onClick={handleClick}>
          Sign Out
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

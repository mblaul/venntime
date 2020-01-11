import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MeetUpForm from '../components/meetups/Form';

const MeetUps: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>☕ Add a meetup ☕</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <MeetUpForm formType="create" />
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import MeetUpForm from '../components/meetups/Form';
import get from 'lodash/get';
import MeetUpsContainer from '../components/meetups/Container';

interface MeetUpsProps extends RouteComponentProps {}

const MeetUps: React.FC<MeetUpsProps> = props => {
  const { match: { params } } = props;
  const meetupId = get(params, 'meetupId');
  const showNewMeetupForm = meetupId === 'new';

  const meetupPageSettings = {
    title: showNewMeetupForm ? '☕ Add a meetup ☕' : '🧾 Info 🧾',
    component: showNewMeetupForm ? <MeetUpForm formType="create" /> : <MeetUpsContainer meetupId={meetupId} />,
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{meetupPageSettings.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{meetupPageSettings.component}</IonContent>
    </IonPage>
  );
};

export default MeetUps;

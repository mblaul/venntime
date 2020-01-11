import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonSpinner, IonItem } from '@ionic/react';

import { MeetUp } from '../../types';

import { formatDate } from '../../utils/dateTime';

type MeetUpCardProps = {
  loading?: boolean;
  meetUp?: MeetUp;
};

const MeetUpCard: React.FC<MeetUpCardProps> = ({ loading, meetUp }) => {
  

  const peepNames = meetUp && meetUp.peeps && meetUp.peeps.map(peep => peep.firstName).join(', ');

  return (
    <IonContent>
      <IonCard>
        {loading && (
          <>
          <IonCardHeader>
            <IonCardTitle>Loading..</IonCardTitle>
              <IonCardContent><IonSpinner name="crescent" style={{width: '100%'}}/></IonCardContent>
          </IonCardHeader>
          </>
        )}
        {meetUp && (
          <>
          <IonCardHeader>
            <IonCardTitle>{meetUp.name || 'Meetup'}</IonCardTitle>
              <IonCardSubtitle>organizer: {meetUp.owner.firstName}</IonCardSubtitle>
            {peepNames && <IonCardSubtitle>with: {peepNames}</IonCardSubtitle>}
          </IonCardHeader>

            <IonCardContent>{meetUp.time && formatDate(meetUp.time.toDate())}</IonCardContent>
            <IonCardContent>organizer: {meetUp.owner.firstName}</IonCardContent>
          </>
        )}
      </IonCard>
    </IonContent>
  );
};

export default MeetUpCard;

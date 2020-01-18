import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonSpinner } from '@ionic/react';

import { MeetUp } from '../../types';

import { formatDate } from '../../utils/dateTime';

type MeetUpCardProps = {
  error?: Error,
  loading?: boolean;
  meetUp?: MeetUp;
};

const MeetUpCard: React.FC<MeetUpCardProps> = ({ error, loading, meetUp }) => {
  

  const peepNames = meetUp && meetUp.peeps && meetUp.peeps.map(peep => peep.firstName).join(', ');

  return (
    <IonContent>
      <IonCard>

        {(error || loading) && (
          <>
          <IonCardHeader>
            <IonCardTitle>{(error && 'Oops!') || (loading && 'Loading...')}</IonCardTitle>
              <IonCardContent>
                {error && error.message}
                {loading && <IonSpinner name="crescent" style={{width: '100%'}}/>}
              </IonCardContent>
          </IonCardHeader>
          </>
        )}

        {meetUp && (
          <>
          <IonCardHeader>
            <IonCardTitle>{meetUp.name || 'Meetup'}</IonCardTitle>
              <IonCardSubtitle>organizer: {meetUp.organizer.firstName}</IonCardSubtitle>
            {peepNames && <IonCardSubtitle>with: {peepNames}</IonCardSubtitle>}
          </IonCardHeader>

            <IonCardContent>{meetUp.time && formatDate(meetUp.time.toDate())}</IonCardContent>
            <IonCardContent>organizer: {meetUp.organizer.firstName}</IonCardContent>
          </>
        )}

      </IonCard>
    </IonContent>
  );
};

export default MeetUpCard;

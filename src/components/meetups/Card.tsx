import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonSpinner } from '@ionic/react';

import { MeetUp } from '../../types';

import { formatDate } from '../../utils/dateTime';

type MeetUpCardProps = {
  error?: Error,
  loading?: boolean;
  meetup?: MeetUp;
};

const MeetUpCard: React.FC<MeetUpCardProps> = ({ error, loading, meetup }) => {
  
  const peepNames = meetup && meetup.peeps && meetup.peeps.map(peep => peep.firstName).join(', ');

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

        {meetup && (
          <>
          <IonCardHeader>
            <IonCardTitle>{meetup.name || 'Meetup'}</IonCardTitle>
              <IonCardSubtitle>organizer: {meetup.organizer.firstName}</IonCardSubtitle>
            {peepNames && <IonCardSubtitle>with: {peepNames}</IonCardSubtitle>}
          </IonCardHeader>

            <IonCardContent>{meetup.time && formatDate(meetup.time.toDate())}</IonCardContent>
            <IonCardContent>organizer: {meetup.organizer.firstName}</IonCardContent>
          </>
        )}

      </IonCard>
    </IonContent>
  );
};

export default MeetUpCard;

import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/react';

import { MeetUp } from '../../types';

import { formatDate } from '../../utils/dateTime';

type MeetUpCardProps = {
  meetUp: MeetUp;
};

const MeetUpCard: React.FC<MeetUpCardProps> = ({ meetUp }) => {
  const { name, owner, peeps, time } = meetUp;

  const peepNames = peeps && peeps.map(peep => peep.firstName).join(', ');

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{name || 'Meetup'}</IonCardTitle>
          <IonCardSubtitle>organizer: {owner.firstName}</IonCardSubtitle>
          {peepNames && <IonCardSubtitle>with: {peepNames}</IonCardSubtitle>}
        </IonCardHeader>

        <IonCardContent>{time && formatDate(time.toDate())}</IonCardContent>
        <IonCardContent>organizer: {owner.firstName}</IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default MeetUpCard;

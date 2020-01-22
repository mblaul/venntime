import React from 'react';

import fire from '../../fire';
import { useDocument } from 'react-firebase-hooks/firestore';

import { MeetUp } from '../../types';
import MeetUpCard from './Card';

interface MeetUpsContainerProps {
  meetupId: string;
}

const MeetUpsContainer: React.FC<MeetUpsContainerProps> = ({ meetupId }) => {
  const [ value, loading, error ] = useDocument(fire.firestore().doc(`meetups/${meetupId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const data: any = value && value.data();

  const meetup: MeetUp = data;

  return <MeetUpCard loading={loading} error={error} meetup={meetup} />;
};

export default MeetUpsContainer;

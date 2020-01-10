import React from 'react';

import { useDocument } from 'react-firebase-hooks/firestore';
import { MeetUp } from '../../types';

import fire from '../../fire';

import MeetUpCard from './Card';

const MeetUpsContainer: React.FC = () => {
  const meetupId = 'placeholder';
  const [ value, loading, error ] = useDocument(fire.firestore().doc(`meetups/${meetupId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const data: any = value && value.data();

  const meetUp: MeetUp = data;

  return loading || error ? null : <MeetUpCard meetUp={meetUp} />;
};

export default MeetUpsContainer;

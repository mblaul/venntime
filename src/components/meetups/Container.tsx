import React from 'react';

import fire from '../../fire';
import { useDocument } from 'react-firebase-hooks/firestore';

import { MeetUp } from '../../types';
import MeetUpCard from './Card';

const MeetUpsContainer: React.FC = () => {
  const meetupId = 'placeholder';
  const [ value, loading, error ] = useDocument(fire.firestore().doc(`meetups/124214124124`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const data: any = value && value.data();

  const meetUp: MeetUp = data;

  return <MeetUpCard loading={loading} error={error} meetUp={meetUp} />;
};

export default MeetUpsContainer;

import React from 'react';

import fire from '../../fire';
import { useDocument } from 'react-firebase-hooks/firestore';

import Loading from '../Loading';

import { MeetUp } from '../../types';
import MeetUpCard from './Card';

const MeetUpsContainer: React.FC = () => {
  const meetupId = 'placeholder';
  const [ value, loading, error ] = useDocument(fire.firestore().doc(`meetups/${meetupId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const data: any = value && value.data();

  const meetUp: MeetUp = data;

  return <MeetUpCard loading={loading} meetUp={meetUp} />;
};

export default MeetUpsContainer;

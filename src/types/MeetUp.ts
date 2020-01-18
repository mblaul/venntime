import { firestore } from 'firebase';
import { Place, User } from './';

type MeetUp = {
  name: string;
  organizer: User;
  peeps?: [User];
  place?: Place;
  time?: firestore.Timestamp;
  created_at?: firestore.Timestamp;
  updated_at?: firestore.Timestamp;
};

export default MeetUp;

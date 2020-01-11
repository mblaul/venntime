import { firestore } from 'firebase';
import { User } from './';

type MeetUp = {
  name: string;
  organizer: User;
  peeps?: [User];
  place?: [Number, Number];
  time?: firestore.Timestamp;
  created_at?: firestore.Timestamp;
  updated_at?: firestore.Timestamp;
};

export default MeetUp;

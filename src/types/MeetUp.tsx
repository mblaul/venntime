import { firestore } from 'firebase';
import { User } from './';

type MeetUp = {
  name: string;
  owner: User;
  peeps?: [User];
  place?: [Float32Array, Float32Array];
  time?: firestore.Timestamp;
  created_at: firestore.Timestamp;
  updated_at: firestore.Timestamp;
};

export default MeetUp;

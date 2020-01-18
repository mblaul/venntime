import { firestore } from 'firebase';

type Place = {
  uid: string;
  name: string;
  geopoint?: firestore.GeoPoint;
  created_at?: firestore.Timestamp;
  updated_at?: firestore.Timestamp;
};

export default Place;

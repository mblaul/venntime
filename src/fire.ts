import firebase from 'firebase';
import { firebaseConfig } from './config/firebase'

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
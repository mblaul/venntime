import React, { useState, FormEvent } from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

import fire from '../fire';

const Login: React.FC = () => {
  
  const [ formValues, setFormValues ] = useState({ email: '', password: '' });

  const handleChange = (event: Event) => {
    const { name, value } = event.target as HTMLIonInputElement;
    setFormValues({ ...formValues, [name]: value })
  };
  
  const sendAuth = (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = formValues;
    fire.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle errors here
    }); 
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={sendAuth}>
          <IonItem>
            <IonLabel>email</IonLabel>
            <IonInput name="email" type="email" placeholder="name@email.com" onIonChange={handleChange}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>password</IonLabel>
            <IonInput name ="password" type="password" onIonChange={handleChange}></IonInput>
          </IonItem>
          <p>{JSON.stringify(formValues)}</p>
          <button type="submit">Submit</button>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;

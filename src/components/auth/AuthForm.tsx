import React, { useState, FormEvent, Fragment } from 'react';
import { useHistory } from 'react-router';

import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

import fire from '../../fire';

import { AuthObject } from '../../types';
import { RegisterAuthObject } from '../../types/RegisterAuthObject';

import { authForms } from '../../forms/auth';

const getInitialState = (formType: string): AuthObject | RegisterAuthObject | void => {
  switch (formType) {
    case 'login': {
      return {
        email: '',
        password: '',
      };
    }

    case 'register': {
      return {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    }
  }
};

type AuthFormProps = {
  formType: 'register' | 'login';
};

const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
  const [ formValues, setFormValues ] = useState(getInitialState(formType));
  const history = useHistory();

  const handleChange = (event: FormEvent) => {
    const { name, value } = event.target as HTMLIonInputElement;
    if (formValues) setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (formValues) {
      const { email, password } = formValues;

      switch (formType) {
        case 'login': {
          fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
              window.alert('logged in!')
            })
            .catch(error => {
            });
          break;
        }
        case 'register': {
          fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
              window.alert(user);
              history.push('/home');
            })
            .catch(error => {
              window.alert(error);
            });
          break;
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {authForms[formType].fields.map(fieldProps => (
        <Fragment key={fieldProps.name}>
          <IonLabel>{fieldProps.label}</IonLabel>
          <IonItem className="ion-margin-bottom">
            <IonInput {...fieldProps} onInput={handleChange} />
          </IonItem>
        </Fragment>
      ))}
      <IonButton className="ion-margin-top" expand="block" size="large" type="submit">
        Submit
      </IonButton>
    </form>
  );
};

export default AuthForm;

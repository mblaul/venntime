import React, { useState, FormEvent, Fragment } from 'react';
import { useHistory } from 'react-router';

import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

import fire from '../../fire';

import { MeetUp } from '../../types';

import { meetUpForms } from '../../forms/meetUp';

type MeetUpFormProps = {
  formType: 'create';
};

const MeetUpForm: React.FC<MeetUpFormProps> = ({ formType }) => {
  const [ formValues, setFormValues ] = useState({});

  const handleChange = (event: FormEvent) => {
    const { name, value } = event.target as HTMLIonInputElement;
    if (formValues) setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (formValues) {
      return await fire.firestore().collection('meetUps').doc().set(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {meetUpForms[formType].fields.map(fieldProps => (
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

export default MeetUpForm;

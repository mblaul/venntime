import React, { FunctionComponent, ComponentClass, useState, FormEvent, Fragment } from 'react';

import { IonButton, IonItem, IonLabel } from '@ionic/react';

import fire from '../../fire';

import { MeetUp } from '../../types';

import { meetUpForms } from '../../forms/meetUp/';
import FormField from '../../types/FormField';

type MeetUpFormProps = {
  formType: 'create';
};

const MeetUpForm: React.FC<MeetUpFormProps> = ({ formType }) => {
  const [ formValues, setFormValues ] = useState({});

  const handleChange = (event: CustomEvent, field: FormField) => {
    const { name, value } = event.target as HTMLIonInputElement;
    console.log(field);
    if (formValues) {
      const newValue = field.mapValueToName ? field.mapValueToName(value, field) : value;
      setFormValues({ ...formValues, [name]: newValue });
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (formValues) {
      try {
        return await fire.firestore().collection('meetUps').doc().set(formValues);
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(formValues);
  return (
    <form onSubmit={handleSubmit}>
      {/* Get the form and loop  over its sections */}
      {meetUpForms[formType].sections.map(section => (
        <Fragment key={section.name}>
          <IonLabel>{section.name}</IonLabel>
          <br />

          {/* Present each field for the section */}
          {section.fields.map(field => {
            const Component: any = field.component;
            return (
              <Fragment key={field.name}>
                <IonLabel>{field.label}</IonLabel>
                <IonItem className="ion-margin-bottom">
                  <Component
                    {...field}
                    {...field.defaultComponentProps}
                    onIonChange={(event: CustomEvent) => handleChange(event, field)}
                  />
                </IonItem>
              </Fragment>
            );
          })}
        </Fragment>
      ))}

      <IonButton className="ion-margin-top" expand="block" size="large" type="submit">
        Submit
      </IonButton>
    </form>
  );
};

export default MeetUpForm;

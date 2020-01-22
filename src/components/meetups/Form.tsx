import React, { useState, FormEvent, Fragment } from 'react';
import { IonButton, IonCard, IonCardContent, IonItem, IonLabel, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router';

import fire from '../../fire';

import { meetUpForms } from '../../forms/meetUp/';
import FormField from '../../types/FormField';

type MeetUpFormProps = {
  formType: 'create';
};

const MeetUpForm: React.FC<MeetUpFormProps> = ({ formType }) => {
  const history = useHistory();
  const [ formValues, setFormValues ] = useState({});

  const handleChange = (event: CustomEvent, field: FormField) => {
    const { name, value } = event.target as HTMLIonInputElement;
    if (formValues) {
      const nameValueMap = field.mapValueToName ? field.mapValueToName(value, field) : { [name]: value };
      setFormValues({ ...formValues, ...nameValueMap });
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (formValues) {
      try {
        const meetUp = await fire.firestore().collection('meetups').add(formValues);
        if (meetUp) history.push(`/meetUps/${meetUp.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Fragment>
      <IonTitle>Form</IonTitle>
      <IonCard>
        <IonCardContent>
          <form onSubmit={handleSubmit}>
            {/* Get the form and loop  over its sections */}
            {meetUpForms[formType].sections.map(section => (
              <Fragment key={section.name}>
                <IonLabel>{section.name}</IonLabel>
                <br />

                {/* Present each field for the section */}
                {section.fields.map(field => {
                  // TODO Find the correct type for this
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
        </IonCardContent>
      </IonCard>
    </Fragment>
  );
};

export default MeetUpForm;

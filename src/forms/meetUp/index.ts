import TextField from '../fields/TextField';
import DateField from '../fields/DateField';
import { IonDatetime, IonInput } from '@ionic/react';

// Form fields
const name = new TextField({
  name: 'name',
  label: 'Meetup Name',
  type: 'text',
  required: false,
  component: IonInput,
});

const organizer = new TextField({
  name: 'organizer',
  label: 'Organizer',
  type: 'text',
  required: true,
  component: IonInput,
});

const peeps = new TextField({
  name: 'peeps',
  label: 'Peeps',
  type: 'text',
  required: false,
  component: IonInput,
});

const place = new TextField({
  name: 'place',
  label: 'Place',
  type: 'text',
  required: false,
  component: IonInput,
});

const date = new DateField({
  name: 'date',
  label: 'Date',
  type: 'date',
  required: false,
  component: IonDatetime,
  defaultComponentProps: {
    displayFormat: 'MMM DD, YYYY',
    min: '2019-01-01',
  },
});

const time = new DateField({
  name: 'time',
  label: 'Time',
  type: 'time',
  required: false,
  component: IonDatetime,
  defaultComponentProps: {
    displayFormat: 'h:mm A',
  },
});

// Forms
const create = {
  sections: [
    { name: 'Info', fields: [ name, organizer, peeps ] },
    { name: 'Place', fields: [ place ] },
    { name: 'Suggested Time', fields: [ date, time ] },
  ],
};

// const signUp = {
//   fields: [ ],
// };

export const meetUpForms = {
  create,
  // signUp,
};

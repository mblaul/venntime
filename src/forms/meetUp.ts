import FormField from '../types/FormField';

// Form fields
const name: FormField = {
  name: 'name',
  label: 'Meetup Name',
  type: 'text',
  required: true,
};

const organizer: FormField = {
  name: 'organizer',
  label: 'Organizer',
  type: 'text',
  required: true,
};

const peeps: FormField = {
  name: 'peeps',
  label: 'Peeps',
  type: 'text',
  required: false,
};

const place: FormField = {
  name: 'place',
  label: 'Place',
  type: 'text',
  required: false,
};

const time: FormField = {
  name: 'time',
  label: 'Time',
  type: 'date',
  required: false,
};

// Forms
const create = {
  fields: [ name, organizer, peeps, place, time ],
};

// const signUp = {
//   fields: [ ],
// };

export const meetUpForms = {
  create,
  // signUp,
};

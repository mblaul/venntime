import FormField from '../types/FormField'

// Form fields
const displayName: FormField = {
  name: 'displayName',
  label: 'Username',
  type: 'text',
  placeholder: 'leiaorgana77',
  required: true,
}

const email: FormField = {
  name: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'leia@starwars.com',
  required: true,
}

const password: FormField = {
  name: 'password',
  label: 'Password',
  type: 'password',
  required: true,
}

const confirmPassword: FormField = {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  required: true,
}

// Forms
const login = {
  fields: [ email, password ],
};

const register = {
  fields: [ displayName, email, password, confirmPassword ],
};

export const authForms = {
  login,
  register,
};
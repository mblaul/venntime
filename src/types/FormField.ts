import { IonInput } from '@ionic/react';

type FormField = {
  name: string;
  label: string;
  type?: 'number' | 'time' | 'text' | 'tel' | 'url' | 'email' | 'search' | 'date' | 'password' | undefined;
  placeholder?: string;
  required?: boolean;
}

export default FormField;
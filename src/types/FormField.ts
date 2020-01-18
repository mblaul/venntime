import { ComponentType } from 'react';

interface FormField {
  name: string;
  label: string;
  type?: 'number' | 'time' | 'text' | 'tel' | 'url' | 'email' | 'search' | 'date' | 'password' | undefined;
  placeholder?: string;
  required?: boolean;
  component?: ComponentType;
  defaultComponentProps?: object;
  mapValueToName?: Function | undefined;
}

export default FormField;

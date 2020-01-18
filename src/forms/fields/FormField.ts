import { ComponentType } from 'react';
import { IonInput } from '@ionic/react';
import { FormField as FormFieldType } from '../../types';

export default class FormField {
  name: string;
  label: string;
  type?: 'number' | 'time' | 'text' | 'tel' | 'url' | 'email' | 'search' | 'date' | 'password' | undefined;
  placeholder?: string;
  required?: boolean;
  component?: ComponentType;
  defaultComponentProps?: object;
  mapValueToName?: Function | undefined;

  constructor(args: FormFieldType) {
    this.name = args['name'];
    this.label = args['label'];
    this.type = args['type'] || 'text';
    this.placeholder = args['placeholder'] || undefined;
    this.required = args['required'] || false;
    this.component = args['component'] || IonInput;
    this.defaultComponentProps = args['defaultComponentProps'] || undefined;
    this.mapValueToName = args['mapValueToName'] || undefined;
  }
}

import { IonInput } from '@ionic/react';
import FormField from './FormField';
import { FormField as FormFieldType } from '../../types';

export default class TextField extends FormField {
  constructor(args: FormFieldType) {
    super(args);
    this.component = args['component'] || IonInput;
  }
}

import { IonDatetime } from '@ionic/react';
import FormField from './FormField';
import { FormField as FormFieldType } from '../../types';

export default class DateField extends FormField {
  public static formatToTimeStamp(value: string, field: FormField) {
    console.log(value);
    return {
      timestamp: value,
    };
  }

  constructor(args: FormFieldType) {
    super(args);
    this.component = args['component'] || IonDatetime;
    this.mapValueToName = args['mapValueToName'] || DateField.formatToTimeStamp;
  }
}

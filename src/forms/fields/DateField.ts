import { IonDatetime } from '@ionic/react';
import { firestore } from 'firebase';
import { parseISO, getUnixTime } from 'date-fns'
import FormField from './FormField';
import { FormField as FormFieldType } from '../../types';

export default class DateField extends FormField {
  public static formatToTimestamp(value: string, field: FormField) {
    
    const isoDate = parseISO(value);
    const unixTimeValue = getUnixTime(isoDate);
    const timestamp = new firestore.Timestamp(unixTimeValue, 0);
    
    return {
      time: timestamp,
    };
  }

  constructor(args: FormFieldType) {
    super(args);
    this.component = args['component'] || IonDatetime;
    this.mapValueToName = args['mapValueToName'] || DateField.formatToTimestamp;
  }
}

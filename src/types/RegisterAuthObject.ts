import { AuthObject } from './'

export interface RegisterAuthObject extends AuthObject {
  displayName: string;
  confirmPassword: string;
};

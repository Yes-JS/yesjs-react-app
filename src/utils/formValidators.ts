import moment from 'moment';

export const required = <T>(v: T) => (v ? undefined : 'Field is mandatory.');

export const isValidDate = <T>(v: T) => {
  return moment(v, 'DD/MM/YYYY', true).isValid()
    ? undefined
    : 'Invalid Date Format';
};

export const onlyNumberField = (val: string) => {
  return /^\d+$/.test(val) ? undefined : 'Only digits are allowed';
};

export const isBiggerThan18 = <T>(v: T) => {
  if (moment(v, 'DD/MM/YYYY', true).isValid()) {
    const difference = moment().diff(moment(v, 'DD/MM/YYYY'), 'year');
    return difference >= 18
      ? undefined
      : 'You must be over 18 to create an account';
  }
  return '';
};

export const requiredCheckbox = (v: unknown) =>
  v ? undefined : 'You must agree to create an account';

export const emailValidation = (value: string): string | undefined =>
  value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? undefined
    : 'Please use format login@example.com';

export const minLengthValidation = (
  value: string,
  param: number,
): string | undefined =>
  value && value.length > param ? '1-50 characters' : undefined;

export const usernameValidation = (value: string): string | undefined =>
  value && /^[a-zA-Z0-9]{8,50}$/g.test(value)
    ? undefined
    : '8-50 characters: latin alphabet and digits';

export const passwordValidation = (value: string): string | undefined =>
  value && /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,100})$/g.test(value)
    ? undefined
    : '8-100 characters -\n' +
      ' at least 1 letter in upper case -\n' +
      ' at least 1 letter in lower case -\n' +
      ' at least 1 digit';

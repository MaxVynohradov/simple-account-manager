import { FormikHandlers } from 'formik';

export interface IInputComponent {
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  name: string;
  placeholder?: string;
  error: boolean;
}

export interface IInput {
  label?: string;
  type?: string;
  name: string;
  inputComponent?: React.FC<IInputComponent>;
}

export default IInput;

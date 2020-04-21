import * as Yup from 'yup';

const WizardValidationSchema = Yup.object().shape({
  userName: Yup.string().min(2, 'User Name Too Short!').max(70, 'User Name Too Long!').required('Required'),
  password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordRepeat: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  avatar: Yup.mixed(),
});

export default WizardValidationSchema;

import * as Yup from 'yup';

const FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = new Set(['image/jpg', 'image/jpeg', 'image/gif', 'image/png']);

const WizardValidationSchema = Yup.object().shape({
  userName: Yup.string().min(2, 'User Name Too Short!').max(70, 'User Name Too Long!').required('Required'),
  password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordRepeat: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  avatar: Yup.mixed()
    .test('fileSize', 'File too large', (value) => value && value.size <= FILE_SIZE)
    .test('fileFormat', 'Unsupported Format', (value) => value && SUPPORTED_FORMATS.has(value.type)),
});

export default WizardValidationSchema;

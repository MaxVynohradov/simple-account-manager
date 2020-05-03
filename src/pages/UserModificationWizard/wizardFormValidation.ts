import dayjs from 'dayjs';
import * as Yup from 'yup';

const FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = new Set([
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
]);

const WizardValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'User Name Too Short!')
    .max(70, 'User Name Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordRepeat: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  avatar: Yup.mixed()
    .test('fileSize', 'File too large', (value) =>
      value ? value.size <= FILE_SIZE : true,
    )
    .test('fileFormat', 'Unsupported Format', (value) =>
      value ? SUPPORTED_FORMATS.has(value.type) : true,
    ),
  firstName: Yup.string()
    .min(2, 'User Name Too Short!')
    .max(70, 'User Name Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'User Name Too Short!')
    .max(70, 'User Name Too Long!')
    .required('Required'),
  birthDate: Yup.date()
    .max(dayjs().subtract(18, 'year').toDate(), 'User must be older 18')
    .required('Required'),
  email: Yup.string().email('Incorrect email format').required('Required'),
  address: Yup.string()
    .min(5, 'Address Too Short!')
    .max(180, 'Address Too Long!')
    .required('Required'),
  gender: Yup.string().oneOf(['Male', 'Female']).required('Required'),
  githubLink: Yup.string().required('Required'),
  facebookLink: Yup.string().required('Required'),
  mainLanguage: Yup.mixed().required('Required'),
  fax: Yup.string().required('Required'),
});

export default WizardValidationSchema;

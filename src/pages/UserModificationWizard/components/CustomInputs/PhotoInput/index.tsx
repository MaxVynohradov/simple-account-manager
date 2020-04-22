/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, FieldProps } from 'formik';
import React, { memo, useCallback, useState } from 'react';
import { useTheme } from 'react-jss';

import addButtonIcon from '../../../../../assets/icons/add.svg';
import userIcon from '../../../../../assets/icons/list of users.svg';
import { IInput } from '../../../interfaces/IInput';
import PhotoCropper from '../../CropperModal';
import useStyles from '../styles';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const PhotoUploadInput: React.FC<IInput & FieldProps> = ({
  label,
  field,
  name,
  form: { touched, errors, setFieldValue },
  type,
}: IInput & FieldProps) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | ArrayBuffer | null>(null);
  const [image, setImage] = useState<HTMLImageElement>();
  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError });

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      event.preventDefault();
      const fileListObj: FileList | null = event.target.files;
      const file: File | null = fileListObj && fileListObj[0];
      const reader = new FileReader();

      reader.onloadend = (): void => {
        setPhoto(file);
        setPhotoBase64(reader.result);
        setFieldValue('avatar', file);
      };

      reader.readAsDataURL(file as Blob);
    },
    [setFieldValue],
  );

  const updateCroppedImageFile = useCallback(
    (file: File): void => {
      setPhoto(file);
      setFieldValue('avatar', file);
    },
    [setFieldValue],
  );

  return (
    <div className={classes.fileInputBlock}>
      <img
        ref={(imageRef: HTMLImageElement): void => setImage(imageRef)}
        src={photo ? URL.createObjectURL(photo) : userIcon}
        alt={photo ? photo.name : 'user-icon'}
        className={classes.imagePreview}
        height={200}
        width={200}
      />
      <label htmlFor={name} className={classes.fileInputLabel}>
        <input
          {...field}
          type={type}
          name={field.name}
          className={classes.fileInput}
          onChange={handleInputChange}
          value=""
        />
        <img src={addButtonIcon} alt="+" />
        {` ${label}`}
      </label>
      <ErrorMessage name={field.name}>
        {(msg): React.ReactNode => <p className={classes.simpleInputFieldErrorMessage}>{msg}</p>}
      </ErrorMessage>
      <PhotoCropper
        image={image as HTMLImageElement}
        imageBase64={photoBase64}
        updateImageFile={updateCroppedImageFile}
      />
    </div>
  );
};

export default memo(PhotoUploadInput);

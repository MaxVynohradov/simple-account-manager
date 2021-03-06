/* eslint-disable max-len, @typescript-eslint/no-explicit-any, react/destructuring-assignment, react/sort-comp,, @typescript-eslint/explicit-function-return-type, @typescript-eslint/indent, react/static-property-placement  */

import { connect, FormikProps } from 'formik';
import debounce from 'lodash.debounce';
import * as React from 'react';
import isEqual from 'react-fast-compare';

export interface PersistProps {
  name: string;
  debounce?: number;
  isSessionStorage?: boolean;
}

class FormikPersist extends React.Component<
  PersistProps & { formik: FormikProps<any> },
  {}
> {
  static defaultProps = {
    debounce: 300,
  };

  saveForm = debounce((data: FormikProps<{}>) => {
    const dataToSerialize = JSON.parse(JSON.stringify(data));
    // @ts-ignore
    dataToSerialize.values.myHobbies = [...data.values.myHobbies];
    if (this.props.isSessionStorage)
      window.sessionStorage.setItem(
        this.props.name,
        JSON.stringify(dataToSerialize),
      );
    else
      window.localStorage.setItem(
        this.props.name,
        JSON.stringify(dataToSerialize),
      );
  }, this.props.debounce);

  componentDidUpdate(prevProps: PersistProps & { formik: FormikProps<any> }) {
    if (!isEqual(prevProps.formik, this.props.formik))
      this.saveForm(this.props.formik);
  }

  componentWillUnmount() {
    this.saveForm(this.props.formik);
  }

  componentDidMount() {
    const maybeState = this.props.isSessionStorage
      ? window.sessionStorage.getItem(this.props.name)
      : window.localStorage.getItem(this.props.name);
    if (maybeState && maybeState !== null) {
      const formikState = JSON.parse(maybeState);
      formikState.values.myHobbies = new Set<string>(
        formikState.values.myHobbies && formikState.values.myHobbies.length
          ? formikState.values.myHobbies
          : [],
      );
      this.props.formik.setFormikState(formikState);
    }
  }

  render() {
    return null;
  }
}

const Persist = connect<PersistProps, any>(FormikPersist);

export default Persist;

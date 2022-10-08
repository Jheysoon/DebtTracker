const validations = (values: any) => {
  let errors: any = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  return errors;
};

export default validations;

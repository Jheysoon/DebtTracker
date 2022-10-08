import {Formik} from 'formik';

import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

import BaseHeader from '~/common/components/BaseHeader';
import TextField from '~/common/fields/TextField';

import validations from './validations';

const CreateUser = () => {
  return (
    <>
      <BaseHeader title={'Create User'} />

      <View style={styles.viewStyle}>
        <Formik
          initialValues={{firstName: '', lastName: ''}}
          onSubmit={() => {
            //
          }}
          validate={validations}>
          {({handleSubmit}) => (
            <>
              <TextField name="firstName" label="First Name *" />

              <TextField name="lastName" label="Last Name *" />

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.btnStyle}>
                Create User
              </Button>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    padding: 5,
  },
  btnStyle: {
    marginTop: 12,
  },
});

export default CreateUser;

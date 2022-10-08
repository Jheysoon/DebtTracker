import {useField} from 'formik';

import {StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

type Props = {
  name: string;
  label: string;
};

const TextField = ({name, label}: Props) => {
  const [field, meta, helpers] = useField({name});

  const {setValue} = helpers;

  let isError = false;

  if (meta.error && meta.touched) {
    isError = true;
  }

  return (
    <>
      <TextInput
        label={label}
        value={field.value}
        onChangeText={text => setValue(text)}
        mode="outlined"
        style={styles.textInputStyle}
        error={isError}
      />

      {isError && (
        <Text variant="labelSmall" style={styles.textStyle}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginTop: 10,
  },
  textStyle: {
    color: '#B71C1C',
    textAlign: 'right',
  },
});

export default TextField;

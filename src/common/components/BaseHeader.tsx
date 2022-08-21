import {Appbar} from 'react-native-paper';

const BaseHeader = () => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content title="Debt Tracker" />
    </Appbar.Header>
  );
};

export default BaseHeader;

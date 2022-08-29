import {css} from '@emotion/native';
import {useNavigation} from '@react-navigation/native';

import {ScrollView} from 'react-native';
import {FAB, List} from 'react-native-paper';

import BaseHeader from '~/common/components/BaseHeader';

import {NavigationProp} from '~/common/types/navigation';

const sampleList = [
  {
    name: 'Jayson Martinez',
  },
  {
    name: 'Jayson Martinez',
  },
];

const ListScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      <BaseHeader />
      <ScrollView className="mx-3">
        {sampleList.map((record, key) => (
          <List.Item
            key={key}
            title={record.name}
            left={props => <List.Icon {...props} icon="account" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={key > 0 ? listStyle : null}
          />
        ))}
      </ScrollView>

      <FAB
        icon="plus"
        style={fabStyle}
        onPress={() => {
          navigation.navigate('CreateUser');
        }}
      />
    </>
  );
};

const fabStyle = css`
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 0;
`;

const listStyle = css`
  border-top-width: 1px;
  border-top-color: #bdbdbd;
`;

export default ListScreen;

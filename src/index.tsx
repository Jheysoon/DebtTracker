import {css} from '@emotion/native';

import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';

import BaseHeader from '~/common/components/BaseHeader';

const sampleList = [
  {
    name: 'Jayson Martinez',
  },
  {
    name: 'Jayson Martinez',
  },
];

const MainScreen = () => {
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
    </>
  );
};

const listStyle = css`
  border-top-width: 1px;
  border-top-color: #bdbdbd;
`;

export default MainScreen;

import {Appbar} from 'react-native-paper';

import {css} from '@emotion/native';

const BaseHeader = () => {
  return (
    <Appbar.Header className="bg-blue-900">
      <Appbar.Content titleStyle={contentStyle} title="Debt Tracker" />
    </Appbar.Header>
  );
};

const contentStyle = css`
  color: #fff;
  font-weight: bold;
`;

export default BaseHeader;

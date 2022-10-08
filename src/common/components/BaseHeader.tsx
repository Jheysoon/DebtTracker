import {Appbar} from 'react-native-paper';

import {css} from '@emotion/native';

type Props = {
  title: string;
};

const BaseHeader = ({title}: Props) => {
  return (
    <Appbar.Header className="bg-blue-900">
      <Appbar.Content titleStyle={contentStyle} title={title} />
    </Appbar.Header>
  );
};

const contentStyle = css`
  color: #fff;
  font-weight: bold;
`;

export default BaseHeader;

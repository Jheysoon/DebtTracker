import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  CreateUser: undefined;
  ListScreen: undefined;
};

export type NavProps = NativeStackScreenProps<
  RootStackParamList,
  'ListScreen',
  'CreateUser'
>;

export type NavigationProp = NavProps['navigation'];

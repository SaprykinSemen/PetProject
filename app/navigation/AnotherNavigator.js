import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FriendsNavigator from './FriendsNavigator';
import {headerStyle} from '@constants';

const MoreNavigator = createStackNavigator({
  More: {
    screen: require('@views/More').default,
    navigationOptions: {
      title: 'More',
      headerStyle,
    },
  },
});

const MusicNavigator = createStackNavigator({
  Music: {
    screen: require('@views/Music').default,
    navigationOptions: {
      title: 'Music',
      headerStyle,
    },
  },
});

const CommunityNavigator = createStackNavigator({
  Community: {
    screen: require('@views/Community').default,
    navigationOptions: {
      title: 'Community',
      headerStyle,
    },
  },
});

const AnotherNavigator = createDrawerNavigator({
  More: MoreNavigator,
  Music: MusicNavigator,
  Community: CommunityNavigator,
  Friends: FriendsNavigator,
});

export default AnotherNavigator;

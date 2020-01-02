import {createStackNavigator} from 'react-navigation-stack';
import {headerStyle} from '@constants';

const FriendsNavigator = createStackNavigator({
  Friends: {
    screen: require('@views/Friends').default,
    navigationOptions: {
      title: 'Friends',
      headerStyle,
    },
  },
  Friend: {
    screen: require('@views/Friend').default,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam('name'),
      headerStyle,
    }),
  },
});

export default FriendsNavigator;

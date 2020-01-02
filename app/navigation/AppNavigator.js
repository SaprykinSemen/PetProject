import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import CountersNavigator from './CountersNavigator';
import AnotherNavigator from './AnotherNavigator';
import {headerStyle} from '@constants';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: require('@views/Home').default,
    navigationOptions: {title: 'Home', headerStyle},
  },
});

const WeatherMapNavigator = createStackNavigator({
  Home: {
    screen: require('@views/WeatherMap').default,
    navigationOptions: {title: 'WeatherMap', headerStyle},
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {title: 'Home'},
    },
    WeatherMap: {
      screen: WeatherMapNavigator,
      navigationOptions: {title: 'WeatherMap'},
    },
    Counters: {
      screen: CountersNavigator,
      navigationOptions: {
        title: 'Счетчики',
      },
    },
    Another: {
      screen: AnotherNavigator,
      navigationOptions: {
        title: 'Другое',
      },
    },
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);

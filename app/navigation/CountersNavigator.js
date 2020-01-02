import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import {headerStyle} from '@constants';

const CounerHOCNavigator = createStackNavigator({
  CounterHOC: {
    screen: require('@views/CounterHOC').default,
    navigationOptions: {
      title: 'Counter(HOC)',
      headerStyle,
    },
  },
});

const CounterContextMapNavigator = createStackNavigator({
  CounterContext: {
    screen: require('@views/CounterContext').default,
    navigationOptions: {
      title: 'Counter(Context)',
      headerStyle,
    },
  },
});

const CountersNavigator = createSwitchNavigator({
  CounterHOC: CounerHOCNavigator,
  CounterContext: CounterContextMapNavigator,
});

export default CountersNavigator;

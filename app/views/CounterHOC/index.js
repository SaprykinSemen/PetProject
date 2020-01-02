import React from 'react';
import {View, Button} from 'react-native';
import Counter from '@components/Counter';

export default class CounterHOC extends React.Component {
  state = {
    count: 0,
  };

  countIncrement = () => {
    this.setState(state => ({
      count: ++state.count,
    }));
  };

  countDecrement = () => {
    this.setState(state => ({
      count: --state.count,
    }));
  };

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Counter
          countIncrement={this.countIncrement}
          countDecrement={this.countDecrement}
          count={this.state.count}
        />
        <Button
          title="Counter(Context)"
          onPress={() => this.props.navigation.navigate('CounterContext')}
        />
      </View>
    );
  }
}

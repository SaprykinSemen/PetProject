/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button} from 'react-native';
import Component1 from '@components/Counter/Component1';

export const MyCounterContext = React.createContext(); // 1. Создаем контекст

export default class CounterContext extends React.Component {
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
    const value = {
      // 2. Создаем переменную со значениями, которые будут передаваться в провайдер
      count: this.state.count,
      inc: this.countIncrement,
      dec: this.countDecrement,
    };
    return (
      // 3. Передаем переменную в провайдер оборачивая им компонент
      <MyCounterContext.Provider value={value}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Component1
            countIncrement={this.countIncrement}
            countDecrement={this.countDecrement}
            count={this.state.count}
          />
          <Button
            title="Counter(HOC)"
            onPress={() => this.props.navigation.navigate('CounterHOC')}
          />
        </View>
      </MyCounterContext.Provider>
    );
  }
}

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Text} from 'react-native';
import CounterLog from '@HOC/CounterLog';

function Counter({countIncrement, countDecrement, count}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="-" onPress={countDecrement} />
      <Text style={{paddingHorizontal: 10}}>{count}</Text>
      <Button title="+" onPress={countIncrement} />
    </View>
  );
}

export default CounterLog(Counter);

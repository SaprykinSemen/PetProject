/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Text} from 'react-native';
import {MyCounterContext} from '@views/CounterContext';

export default function CounterConsumer() {
  return (
    // 4. Получаем данные переданные в провайдер из консюмера (получаем контекст). Есть еще способы для получения контекста: через статическое свойство contextType в классовых компонентах и через хук useContext в функциональных компонентах
    <MyCounterContext.Consumer>
      {({dec, inc, count}) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button title="-" onPress={dec} />
          <Text style={{paddingHorizontal: 10}}>{count}</Text>
          <Button title="+" onPress={inc} />
        </View>
      )}
    </MyCounterContext.Consumer>
  );
}

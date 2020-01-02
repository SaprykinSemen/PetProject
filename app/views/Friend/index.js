import React from 'react';
import {View, Text} from 'react-native';

export default function Friend({navigation}) {
  return (
    <View>
      <Text>Friend</Text>
      <Text>{navigation.getParam('name')}</Text>
    </View>
  );
}

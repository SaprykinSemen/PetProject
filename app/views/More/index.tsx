import React from 'react';
import {Text, View, Button} from 'react-native';
import Header from '@components/Header';

export default function More({navigation}) {
  return (
    <View>
      <Header />
      <Text>Еще</Text>
      <Button title="Menu" onPress={navigation.toggleDrawer} />
    </View>
  );
}

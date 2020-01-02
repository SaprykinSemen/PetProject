import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Friends({navigation}) {
  return (
    <View>
      <Text>Friends</Text>
      <Button
        title="Friend"
        onPress={() => navigation.navigate('Friend', {name: 'Frodo'})}
      />
    </View>
  );
}

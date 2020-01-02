import React from 'react';
import {StatusBar} from 'react-native';

export default function Header() {
  return (
    <StatusBar
      // hidden={true}
      backgroundColor={'transparent'}
      barStyle={'dark-content'}
      translucent={true}
      // animated={true}
    />
  );
}

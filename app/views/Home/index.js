import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  View,
} from 'react-native';
import styles from './styles';
import {global} from '@assets/styles';
import Header from '@components/Header';

export default class Home extends React.Component {
  componentDidMount() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }

  render() {
    const {
      navigation: {navigate},
    } = this.props;
    return (
      <View>
        <Header />
        <ScrollView style={global.container}>
          <TouchableOpacity
            onPress={() => navigate('WeatherMap')}
            style={styles.listItem}>
            <Text style={styles.listItemText}>Weather map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('CounterHOC')}
            style={styles.listItem}>
            <Text style={styles.listItemText}>Counter (HOC)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('CounterContext')}
            style={styles.listItem}>
            <Text style={styles.listItemText}>Counter (Context)</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

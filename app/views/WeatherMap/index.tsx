import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {getWeather} from '@reducers/getWeather';
import Header from '@components/Header';

//https://rapidapi.com/blog/access-global-weather-data-with-these-weather-apis/ //weather api

class WeatherMap extends React.Component {
  state = {
    coords: {},
    onPressCoord: {},
  };

  componentDidMount() {
    // if (hasLocationPermission) { // google how to get
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          coords: position.coords,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    // }
  }

  onMapPress = ({coordinate = {}}) => {
    const {getWeather} = this.props;

    getWeather({lat: coordinate.longitude, lon: coordinate.latitude});
    this.setState({onPressCoord: coordinate});
    // console.log('coord--->', coordinate);
  };

  render() {
    const {coords, onPressCoord} = this.state;
    console.log(coords);
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <Header />
        {onPressCoord && (
          <View>
            <Text>{`latitude: ${onPressCoord.latitude}`}</Text>
            <Text>{`longitude: ${onPressCoord.longitude}`}</Text>
          </View>
        )}
        <MapView
          provider={PROVIDER_GOOGLE}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flex: 1, width: '100%'}}
          region={{
            latitude: onPressCoord.latitude || coords.latitude || 0,
            longitude: onPressCoord.longitude || coords.longitude || 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsCompass={false}
          onPress={e => this.onMapPress(e.nativeEvent)}
          followsUserLocation={false}
          loadingEnabled={true}
          // zoomEnabled={false}
          maxZoomLevel={10}
        />
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getWeather}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherMap);

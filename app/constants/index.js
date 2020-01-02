import {Dimensions, Platform, StatusBar} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');
let isIPhoneX = false;

if (Platform.OS === 'ios') {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
}

export const sbHeight =
  Platform.OS === 'ios' ? (isIPhoneX ? 28 : 18) : StatusBar.currentHeight;

export const headerStyle = {
  backgroundColor: '#9bf2ef',
  paddingTop: sbHeight,
  height: sbHeight + 50,
};

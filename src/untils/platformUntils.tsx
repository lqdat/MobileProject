import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const SM_SIZE = 576;
export const MD_SIZE = 720;

const {width} = Dimensions.get('window');

export const WIDTH_DEVICE = Dimensions.get('window').width;
export const HEIGHT_DEVICE = Dimensions.get('window').height;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const isTab = width > SM_SIZE ? true : false;

export const SAFE_AREA = getStatusBarHeight(true);

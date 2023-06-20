import {Dimensions, Platform} from 'react-native';
import colorsStyle from '../styles/colors.style';

const {height, width} = Dimensions.get('window');

export const WIDTH = width < height ? width : height;
export const HEIGHT = width > height ? width : height;

export const WIDTH_SCREEN_RATIO = WIDTH / 375;
export const HEIGHT_SCREEN_RATIO = HEIGHT / 812;

export function RatioWidth(w: number) {
  return w * WIDTH_SCREEN_RATIO;
}

export function RatioHeight(h: number) {
  const newHeight = h * HEIGHT_SCREEN_RATIO;
  return newHeight ? newHeight : h;
}

export function FontSize(size: number) {
  const newSize = Math.ceil(
    size * Math.min(WIDTH_SCREEN_RATIO, HEIGHT_SCREEN_RATIO),
  );
  return newSize ? newSize : size;
}

export const boxShadown = {
  ...Platform.select({
    android: {
      borderRadius: 10,
      shadowColor: colorsStyle.BLACK,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.7,
      shadowRadius: 10,
      elevation: 20,
    },
    ios: {
      shadowOffset: {width: 0.5, height: 1},
      shadowOpacity: 0.7,
      shadowRadius: 6,
      elevation: 0.5,
      borderRadius: 10,
      shadowColor: colorsStyle.BACK,
    },
  }),
};

export const boxShadownWhite = {
  ...Platform.select({
    android: {
      borderRadius: 10,
      shadowColor: colorsStyle.WHITE,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    ios: {
      shadowOffset: {width: 0.5, height: 0.5},
      shadowOpacity: 0.7,
      shadowRadius: 4,
      elevation: 0.5,
      borderRadius: 10,
    },
  }),
};

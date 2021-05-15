import {bottom, colors} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: bottom || 24,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray_AAAAAA,
  },
});

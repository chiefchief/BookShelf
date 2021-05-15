import {StyleSheet} from 'react-native';
import {colors, width} from '@constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  defaultText: {
    width: width - 32,
    height: 40,
    backgroundColor: colors.white_FFFFFF,
    borderRadius: 20,
    padding: 0,
    color: colors.black_000000,
    paddingHorizontal: 16,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
});

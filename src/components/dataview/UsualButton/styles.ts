import {colors} from '@constants';
import {shadowBlock} from '@helpers';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    ...shadowBlock,
  },
  disabled: {
    opacity: 0.24,
  },
  button: {
    flex: 1,
    backgroundColor: colors.white_FFFFFF,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});

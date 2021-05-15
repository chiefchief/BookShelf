import {bottom, colors, top} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: top,
    paddingBottom: bottom || 24,
    backgroundColor: colors.gray_CFCFCF,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  keyboardAvoiding: {
    alignItems: 'center',
    marginTop: top,
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 16,
  },
  noAccount: {
    marginTop: 40,
    textDecorationLine: 'underline',
  },
  errorText: {
    marginBottom: 24,
    height: 32,
    fontSize: 16,
    lineHeight: 32,
    color: colors.red_FF0000,
    fontWeight: 'bold',
  },
});

import {width} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  image: {
    width: (width - 32) / 3,
    aspectRatio: 0.64,
    marginRight: 16,
  },
  topView: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  detailsView: {
    flex: 1,
  },
  details: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

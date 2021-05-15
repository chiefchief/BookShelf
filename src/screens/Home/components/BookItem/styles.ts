import {width} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  image: {
    width: width / 4,
    aspectRatio: 1,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    marginHorizontal: 32,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  synopsis: {
    fontSize: 14,
  },
});

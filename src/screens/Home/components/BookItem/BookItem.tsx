import React from 'react';
import {Image, Pressable, Text, View} from '@components';
import {navigate} from '@services';
import {TBook} from '@types';
import styles from './styles';

const BookItem: React.FC<TProps> = ({item}) => {
  const onPress = () => navigate('BookDetail', {item});

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: item.coverImageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.synopsis} numberOfLines={4}>
          {item.synopsis}
        </Text>
      </View>
    </Pressable>
  );
};

export default BookItem;

type TProps = {
  item: TBook;
};

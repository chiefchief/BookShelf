import React from 'react';
import {useTranslation} from '@hooks';
import {View, Text, Image, ScrollView} from '@components';
import styles from './styles';
import {RouteProp} from '@react-navigation/core';
import {TBook} from '@types';

const BookDetail: React.FC<TProps> = ({route}) => {
  const {t} = useTranslation();
  const {item} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topView}>
        <Image source={{uri: item.coverImageUrl}} style={styles.image} />
        <View style={styles.detailsView}>
          <Text style={styles.details}>{t(`Author: ${item.author}`)}</Text>
          <Text style={styles.details}>{t(`Publisher: ${item.publisher}`)}</Text>
          <Text style={styles.details}>{t(`Page count: ${item.pageCount}`)}</Text>
        </View>
      </View>
      <Text style={styles.title}>{t('Synopsis')}</Text>
      <Text>{item.synopsis}</Text>
    </ScrollView>
  );
};

export default BookDetail;

type TProps = {
  route: RouteProp<{params: {item: TBook}}, 'params'>;
};

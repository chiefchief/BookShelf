import React from 'react';

import {Icon, Pressable} from '@components';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {logOut} from '@reducers/_global';

const ExitButton = () => {
  const dispatch = useDispatch();

  const onPress = () => dispatch(logOut());
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name={'exit'} size={24} />
    </Pressable>
  );
};

export default ExitButton;

type TProps = {};

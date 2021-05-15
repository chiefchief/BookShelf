import React from 'react';
import {useDispatch} from 'react-redux';
import {Icon, Pressable} from '@components';
import {logOut} from '@reducers/_global';
import styles from './styles';

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

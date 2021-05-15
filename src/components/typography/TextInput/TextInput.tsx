import React, {forwardRef, LegacyRef, RefObject, useMemo} from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  ReturnKeyTypeOptions,
  TextInput as TI,
  TextInputProps,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import Icon from '../Icon/Icon';
import styles from './styles';

const TextInput = (
  {style, nextRef, value, onSubmitEditing, clear, search, ...TIProps}: TProps,
  ref: LegacyRef<TI> | undefined,
) => {
  const returnKT: ReturnKeyTypeOptions = useMemo(() => {
    return nextRef ? 'next' : 'go';
  }, [nextRef]);

  const onSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    nextRef ? nextRef.current?.focus() : onSubmitEditing && onSubmitEditing(e);
  };

  return (
    <View style={styles.container}>
      <TI
        returnKeyType={returnKT}
        onSubmitEditing={onSubmit}
        value={value}
        ref={ref}
        style={[styles.defaultText, style]}
        {...TIProps}
      />
      {search ? (
        value?.length ? (
          <Pressable style={styles.icon} hitSlop={12} onPress={clear}>
            <Icon name={'close'} size={16} />
          </Pressable>
        ) : (
          <Icon name={'loupe'} size={24} style={styles.icon} />
        )
      ) : null}
    </View>
  );
};

export default forwardRef(TextInput);

type TProps = {
  nextRef?: RefObject<TI>;
  search?: boolean;
  clear?: () => void;
} & TextInputProps;

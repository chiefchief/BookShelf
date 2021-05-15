import React, {forwardRef, ForwardRefRenderFunction, RefObject, useMemo} from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  ReturnKeyTypeOptions,
  TextInput as TI,
  TextInputProps,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {Icon} from '@components';
import styles from './styles';

const TextInput: ForwardRefRenderFunction<TI, TProps> = (
  {style, nextRef, value, onSubmitEditing, onChangeText, search, ...TIProps},
  ref,
) => {
  const returnKT: ReturnKeyTypeOptions = useMemo(() => {
    return nextRef ? 'next' : 'go';
  }, [nextRef]);

  const onSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    nextRef ? nextRef.current?.focus() : onSubmitEditing && onSubmitEditing(e);
  };

  const clear = () => {
    onChangeText && onChangeText('');
  };

  return (
    <View style={styles.container}>
      <TI
        returnKeyType={returnKT}
        onSubmitEditing={onSubmit}
        value={value}
        onChangeText={onChangeText}
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
} & TextInputProps;

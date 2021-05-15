import React, {useEffect} from 'react';

import {Text, Pressable} from '@components';
import styles from './styles';
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {width} from '@constants';
import {ActivityIndicator, PressableProps, TextStyle, ViewStyle} from 'react-native';

const DEFAULT_BUTTON_WIDTH = width - 32;
const DEFAULT_BUTTON_HEIGHT = 40;

const UsualButton: React.FC<TProps> = ({style, disabled, title, titleStyle, loading, ...otherProps}) => {
  const initialWidth = Number(style?.width || DEFAULT_BUTTON_WIDTH);
  const initialHeight = Number(style?.height || DEFAULT_BUTTON_HEIGHT);
  const widthAnimation = useSharedValue(initialWidth);

  useEffect(() => {
    widthAnimation.value = withTiming(Number(loading) || 0);
  }, [loading, widthAnimation]);

  const containerStyle = useAnimatedStyle(() => ({
    width: interpolate(widthAnimation.value, [0, 1], [initialWidth, initialHeight]),
    height: initialHeight,
  }));

  return (
    <Animated.View style={containerStyle}>
      <Pressable
        disabled={loading || disabled}
        style={[styles.button, style, disabled && styles.disabled]}
        {...otherProps}
      >
        {loading ? (
          <ActivityIndicator size={'small'} animating={true} />
        ) : (
          title && <Text style={[styles.title, titleStyle]}>{title}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default UsualButton;

type TProps = PressableProps & {
  /**
   * !IMPORTANT: use "width" and "height" as number
   */
  style?: ViewStyle;
  title?: string;
  loading?: boolean;
  titleStyle?: TextStyle;
};

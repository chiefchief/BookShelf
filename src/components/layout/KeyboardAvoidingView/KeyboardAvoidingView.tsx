import React from 'react';
import {KeyboardAvoidingView as KAView, KeyboardAvoidingViewProps, Platform} from 'react-native';

const KeyboardAvoidingView: React.FC<TProps> = ({children, iosBehavior, androidBehavior, ...props}) => {
  const behavior: TBehavior = Platform.select({
    ios: iosBehavior || 'padding',
    android: androidBehavior || undefined,
  });

  return (
    <KAView behavior={behavior} {...props}>
      {children}
    </KAView>
  );
};

export default KeyboardAvoidingView;

type TProps = {
  children: React.ReactNode;
  iosBehavior?: TBehavior;
  androidBehavior?: TBehavior;
} & KeyboardAvoidingViewProps;

type TBehavior = 'padding' | 'height' | 'position' | undefined;

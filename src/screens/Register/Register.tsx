import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from '@hooks';
import {View, Pressable, Text, KeyboardAvoidingView, UsualButton, TextInput, Keyboard} from '@components';
import styles from './styles';
import {httpPost, navigate} from '@services';
import {TextInput as TI} from 'react-native';
import {urls} from '@constants';
import {useDispatch} from 'react-redux';
import {setUser} from '@reducers/user';

const Register: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const usernameRef = useRef<TI>(null);
  const passwordRef = useRef<TI>(null);

  const onStartShouldSetResponder = () => {
    Keyboard.dismiss();
    return true;
  };

  const backLogin = () => navigate('Login');

  const onSubmitEditing = () => {
    setLoading(!loading);
    setError('');
    setTimeout(async () => {
      try {
        const {data} = await httpPost(urls.register, {username, password});
        dispatch(setUser(data.user || {}));
        setLoading(false);
      } catch (e) {
        setError(e.data?.message || '');
        setLoading(false);
      }
    }, 800);
  };

  useEffect(() => {
    if (username && password) {
      disabled && setDisabled(false);
    } else {
      !disabled && setDisabled(true);
    }
  }, [username, password, disabled]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        onStartShouldSetResponder={onStartShouldSetResponder}
        keyboardVerticalOffset={20}
      >
        <View style={styles.inputView}>
          <TextInput
            autoCorrect={false}
            placeholder={t('Username')}
            ref={usernameRef}
            nextRef={passwordRef}
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
          />
          <TextInput
            placeholder={t('Password')}
            secureTextEntry={true}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <View>
          <Text style={styles.errorText}>{error}</Text>
        </View>

        <UsualButton loading={loading} disabled={disabled} title={t('Register')} onPress={onSubmitEditing} />
      </KeyboardAvoidingView>
      <Pressable onPress={backLogin}>
        <Text style={styles.noAccount}>{t('Back to LOGIN')}</Text>
      </Pressable>
    </View>
  );
};

export default Register;
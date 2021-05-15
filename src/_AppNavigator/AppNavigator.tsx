import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Register,
  Home,
  BookDetail,
  // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';
import {theme} from './theme';
import {connect} from 'react-redux';
import {TAppState} from '@reducers/index';
import {INITIAL_USER} from '@reducers/__proto__';
import {ExitButton} from '@components';

const InitialStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerRight: ExitButton}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="BookDetail" component={BookDetail} />
    </HomeStack.Navigator>
  );
};

type TProps = {
  user: INITIAL_USER;
};

const AppNavigator: React.FC<TProps> = ({user}) => {
  return (
    <NavigationContainer theme={theme} ref={navigationRef} onStateChange={onStateChange}>
      <InitialStack.Navigator screenOptions={{headerShown: false}}>
        {user.token ? (
          <InitialStack.Screen name="HomeNavigator" component={HomeNavigator} />
        ) : (
          <InitialStack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </InitialStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: TAppState) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AppNavigator);

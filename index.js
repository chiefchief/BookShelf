import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name} from './app.json';
import {i18n} from '@services'; // need for React i18n initialization
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';

LogBox.ignoreAllLogs();

enableScreens();
AppRegistry.registerComponent(name, () => App);

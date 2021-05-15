import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
// need for React i18n initialization
import {enableScreens} from 'react-native-screens';
import {i18n} from '@services';
import {name} from './app.json';
import App from './src/App';

LogBox.ignoreAllLogs();

enableScreens();
AppRegistry.registerComponent(name, () => App);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app2/App'; //실행시 폴더이름 변경요망
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

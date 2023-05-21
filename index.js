/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player'
import { playbackService } from './musicPlayerService';

AppRegistry.registerComponent(appName, () => App);
// functionality to moving of objects like forward & backward
TrackPlayer.registerPlaybackService(() => playbackService);

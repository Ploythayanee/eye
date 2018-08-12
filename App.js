import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import login from './login.js';
import home from  './home.js';
/*import detail from  './import_image.js';
import report from  './report.js';*/

import {createStackNavigator} from 'react-navigation';
import { CheckBox } from 'react-native-elements';

const Navigation = createStackNavigator({
  First: {screen: login},
  Second: {screen: home},
  /*Third: {screen:detail},
  Report: {screen: report},*/

});
export default Navigation;

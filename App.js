/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import splashScreen from './pages/Splash';
import homeScreen from './pages/Home';
import truthScreen from './pages/CalcMethod'; 


const myRoutes = createAnimatedSwitchNavigator({
  Splash: splashScreen,
  Home: homeScreen,
  CalcMethod: truthScreen,
},
{
  transition: (
    <Transition.Together>
      <Transition.Out type="slide-right" interpolation="easeOut" durationMs={400} />
      <Transition.In type="slide-left" interpolation="easeInOut" durationMs={500} />
    </Transition.Together>  
  ),
});


export default createAppContainer(myRoutes);


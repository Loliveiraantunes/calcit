/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import splashScreen from './pages/Splash';
import homeScreen from './pages/Home';
import truthScreen from './pages/Truth';

const myRoutes = createAnimatedSwitchNavigator({
  Splash: splashScreen,
  Home: homeScreen,
  Truth: truthScreen,
},
{
  transition: (
    <Transition.Together>
      <Transition.Out type="fade" interpolation="easeOut" durationMs={350} />
      <Transition.In type="slide-left" interpolation="easeInOut" durationMs={500} />
    </Transition.Together>  
  ),
});

export default createAppContainer(myRoutes);


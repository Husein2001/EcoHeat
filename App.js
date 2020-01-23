import React from 'react';
import {
  View,
  Text
} from 'react-native';
import HomeScreen from './src/views/HomeScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import ProfileScreen from './src/views/ProfileScreen';
import MyCollectionScreen from './src/views/MyCollectionScreen';

import customNavProf from './src/components/ProfileComponent';

const DrawerNavigator = createDrawerNavigator({

  Home: {
    screen: HomeScreen,
  },
  MyCollection: {
    screen: MyCollectionScreen
  },
  Profile: {
    screen: ProfileScreen
  },
}, {
  contentComponent: (props) => customNavProf(props),
  drawerBackgroundColor: 'white',
  drawerType: 'slide',
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#87B940',
    activeLabelStyle: { fontFamily: 'Montserrat-Regular' }
  }
});

const AppNav = createAppContainer(DrawerNavigator);

export default class App extends React.Component {


  render() {
    return (
      <AppNav />
    )
  }
}
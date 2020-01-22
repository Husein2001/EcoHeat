import React from 'react';
import {
  View,
  Text
} from 'react-native';
import HomeScreen from './src/views/HomeScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import ProfileScreen from './src/views/ProfileScreen';
import customNavProf from './src/components/ProfileComponent';

const DrawerNavigator = createDrawerNavigator({

  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen
  },
}, {
  contentComponent: (props) => customNavProf(props),
  drawerBackgroundColor: 'white',
  drawerType: 'slide',
});

const AppNav = createAppContainer(DrawerNavigator);

export default class App extends React.Component {


  render() {
    return (
      <AppNav />
    )
  }
}
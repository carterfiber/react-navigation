import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, } from 'react-navigation';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Links: {
    screen: LinksScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
}, {
  tabBarOptions: {
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'Home':
          iconName = `ios-information-circle`;
          break;
        case 'Links':
          iconName = `ios-link`;
          break;
        case 'Settings':
          iconName = `ios-options`;
      }
      return (
        <Ionicons name={iconName}
          size={28} style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected :
            Colors.tabIconDefault}
        />
      );
    },
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

const Colors = {
  tabIconDefault: '#ccc',
  tabIconSelected: '#2f95dc',
};

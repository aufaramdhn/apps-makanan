import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {
  HomeScreens,
  CartScreens,
  ProfileScreens,
  WhislistScreens,
  SettingScreens,
} from '../screens';
import Icon from 'react-native-remix-icon';
import COLORS from '../constants/Colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ri-apps-fill' : 'ri-apps-line';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'ri-user-fill' : 'ri-user-line';
          } else if (route.name === 'Whislist') {
            iconName = focused ? 'ri-heart-fill' : 'ri-heart-line';
          } else if (route.name === 'Cart') {
            iconName = focused
              ? 'ri-shopping-cart-fill'
              : 'ri-shopping-cart-line';
          }
          return <Icon name={iconName} size="30" color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.Gray,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="Setting" component={SettingScreens} />
      <Tab.Screen name="Whislist" component={WhislistScreens} />
      <Tab.Screen name="Cart" component={CartScreens} />
    </Tab.Navigator>
  );
};

export default Tabs;

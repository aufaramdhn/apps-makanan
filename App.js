import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, CreateStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Tabs from './src/navigations/Tabs';

import { SplashScreens, LoginScreens, RegisterScreens, OnboardingScreens, HomeScreens, CartScreens, DetailsScreens, ProfileScreens, WhislistScreens } from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      intialRouteName={"Details"}
      >
        <Stack.Screen name="Splash" component={SplashScreens} />
        <Stack.Screen name="LoginScreens" component={LoginScreens} />
        <Stack.Screen name="RegisterScreens" component={RegisterScreens} />
        <Stack.Screen name="OnboardingScreens" component={OnboardingScreens} />
        <Stack.Screen name="HomeScreens" component={Tabs} />
        <Stack.Screen name="Cart" component={CartScreens} />
        <Stack.Screen name="Details" component={DetailsScreens} />
        <Stack.Screen name="Profile" component={ProfileScreens} />
        <Stack.Screen name="Whislist" component={WhislistScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
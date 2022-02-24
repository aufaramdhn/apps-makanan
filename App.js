import React from 'react';
import {View, Text} from 'react-native';
import {
  createStackNavigator,
  CreateStackNavigator,
} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import Tabs from './src/navigations/Tabs';

import {
  SplashScreens,
  LoginScreens,
  RegisterScreens,
  OnboardingScreens,
  HomeScreens,
  CartScreens,
  DetailsScreens,
  ProfileScreens,
  WhislistScreens,
  SettingScreens,
  Component1,
  Component2,
  Component3,
  NyobaLogin,
} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        intialRouteName={'Home'}>
        {/* <Stack.Screen name="Splash" component={SplashScreens} />
        <Stack.Screen name="OnboardingScreens" component={OnboardingScreens} /> */}
        <Stack.Screen name="LoginScreens" component={LoginScreens} />
        <Stack.Screen name="RegisterScreens" component={RegisterScreens} />
        <Stack.Screen name="HomeScreens" component={Tabs} />
        {/* <Stack.Screen name="Cart" component={CartScreens} />
        <Stack.Screen name="Details" component={DetailsScreens} />
        <Stack.Screen name="Profile" component={ProfileScreens} />
        <Stack.Screen name="Setting" component={SettingScreens} />
        <Stack.Screen name="Whislist" component={WhislistScreens} /> */}
        {/* <Stack.Screen name="Component1" component={Component1} /> */}
        {/* <Stack.Screen name="Component2" component={Component2} /> */}
        {/* <Stack.Screen name="Component3" component={Component3} /> */}
        {/* <Stack.Screen name="NyobaLogin" component={NyobaLogin} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default App;

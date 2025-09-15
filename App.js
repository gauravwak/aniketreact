// App.js
// import React from 'react';
// import LandingScreen from './android/Screens/LandingScreen';
// import StartOptionScreen from './android/Screens/StartOptionsScreen'

// export default function App() {
//   return (
//   <LandingScreen />
//   <StartOptionScreen/>
// );
// }
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// your screens
// import LandingScreen from './android/Screens/LandingScreen';
import StartOptionsScreen from './android/Screens/StartOptionsScreen';
import LoginScreen from './android/Screens/LoginScreen'; // <- create this file
import ForgotPasswordScreen from './android/Screens/ForgotPasswordScreen'; // <- create this file

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={StartOptionsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


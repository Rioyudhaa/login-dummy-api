import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screen/Login';
import HomeScreen from './screen/Home';
import LayoutScreen from './screen/Layout';

// Mencegah splash screen langsung menghilang
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync(); // Sembunyikan splash screen setelah delay
    }, 2000); // 2 detik
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Layout">
        <Stack.Screen name="Layout" component={LayoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// (Opsional) Style untuk splash screen sementara
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

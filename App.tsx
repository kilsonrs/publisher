import 'react-native-gesture-handler';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { LogBox, StatusBar } from 'react-native';

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  LogBox.ignoreAllLogs(true)
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}


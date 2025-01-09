import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import ReactQueryProvider from '@/lib/ReactQueryProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const PublicRoute = () => {
  console.log("Rendering PublicRoutes");
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen 
        name="(auth)/index" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
};

const ProtectedRoutes=()=>{
  console.log("Rendering ProtectedRoutes");
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen  name='product/[slug]/index' options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MonaSans: require('../assets/fonts/MonaSans-Variable.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  const user=true

 

  return (
    <ThemeProvider  value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ReactQueryProvider>
      {user ? <ProtectedRoutes/>:<PublicRoute/>}
      <StatusBar style="auto" />
      </ReactQueryProvider>
    </ThemeProvider>
  );
}



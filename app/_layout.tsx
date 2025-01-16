import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import ReactQueryProvider from '@/lib/ReactQueryProvider';
import { auth } from '@/firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';
import { AppContextProvider } from '@/components/ContextProvider/ContextProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MonaSans: require('../assets/fonts/MonaSans-Variable.ttf'),
  });

  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Handle Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser as any);
      if (initializing) setInitializing(false);
    });

    return () => unsubscribe();
  }, [initializing]);

  // Handle routing based on auth state
  const segments = useSegments();
  useEffect(() => {
    if (initializing) return;

    const isInAuthGroup = segments[0] === '(tabs)';

    if (user &&  !isInAuthGroup) {
      router.replace('/(tabs)');
    } else if (!user && isInAuthGroup) {
      router.replace('/')
    }
  }, [user, initializing, segments]);

  // Render null while fonts are loading
  if (!loaded) {
    return null;
  }


  if(initializing) return<View style={{
   alignItems:'center',
   flex:1,
   justifyContent:'center',
   backgroundColor:'white'  // Change background color as per your requirement
  }}>
<ActivityIndicator size={"large"}/>
  </View>
  return (
    <AppContextProvider >
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ReactQueryProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
         <Stack.Screen name='index' options={{
          headerShown:false
         }}/>
          <Stack.Screen name='signup' options={{
          headerShown:false
         }}/>
          <Stack.Screen
            name="product/[slug]/index"
            options={{ headerShown: false }}
          />
          <StatusBar style="auto" />
        </Stack>
      </ReactQueryProvider>
    </ThemeProvider>
    </AppContextProvider>
  );
}

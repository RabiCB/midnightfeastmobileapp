import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
       
      
        // tabBarBackground: TabBarBackground,
       
        tabBarStyle: Platform.select({
          
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            borderRadius:24,
           padding:10,
            marginHorizontal: 16,
            marginBottom: 10,
          },
          default: {
            // padding:100,
            height:60,
           
            alignItems: 'center',
            display:"flex",
            justifyContent: 'center',
            
            borderRadius:24,
            marginHorizontal: 16,
            marginBottom: 10,
          },
        }),
     
        tabBarLabelStyle:{
          fontSize: 12,
         
         
        },
       
      
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <FontAwesome6 name="bag-shopping" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: 'Location',
          tabBarIcon: ({ color }) =><FontAwesome5 name="map-marker-alt" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

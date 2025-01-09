import { Tabs, usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Platform, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const route=useRouter()

  return (
    <Tabs
      screenOptions={({route})=>({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
       tabBarIcon:({focused,color,size})=>menufocused(focused,route,color),
      
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
     
       
       
      
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel:({focused,color})=>(
            <Text style={{
              fontSize: 12,
              fontWeight: focused ?'bold':'normal',
              color: focused? Colors.orange:color,
            }}>
             Home
            </Text>
          )
         
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title:  'Cart',
          tabBarLabel:({focused,color})=>(
            <Text style={{
              fontSize: 12,
              fontWeight: focused ?'bold':'normal',
              color: focused? Colors.orange:color,
            }}>
            Cart
            </Text>
          )
        }}

      />
      <Tabs.Screen
        name="location"
        
        options={{
          title: 'Location',
          tabBarLabel:({focused,color})=>(
            <Text style={{
              fontSize: 12,
              fontWeight: focused ?'bold':'normal',
              color: focused? Colors.orange:color,
            }}>
             Location
            </Text>
          )
          
        }}

        
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel:({focused,color})=>(
            <Text style={{
              fontSize: 12,
              fontWeight: focused ?'bold':'normal',
              color: focused? Colors.orange:color,
            }}>
             Profile
            </Text>
          )
        }}
      />
    </Tabs>
  );
}


function menufocused(focused:any,route:{
  name:string,
  
},color:string) {


let icon;
if(route.name==="index"){
  icon=<Entypo name="home" size={focused ?28:24} color={focused ? Colors.orange:color} />
}else if(route?.name==="cart"){
  icon=<FontAwesome6 name="bag-shopping"  size={focused ?28:24} color={focused ? Colors.orange:color} />
}else if(route?.name==="location"){
  icon=<FontAwesome5 name="map-marker-alt"  size={focused ?28:24} color={focused ? Colors.orange:color} />
}else if(route.name==="profile"){
  icon=<FontAwesome5 name="user-alt"  size={focused ?28:24} color={focused ? Colors.orange:color} />
}
return icon

}
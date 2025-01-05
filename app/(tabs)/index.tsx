import { Image, StyleSheet, Platform, Text, ViewComponent, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SafeareaView from '@/components/Wrapper/SafeareaView';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Styles } from '@/constants/ConstantsStyles';
import { Colors } from '@/constants/Colors';
import Homepage from '@/components/Home/Homepage';
import Header from '@/components/Home/Header';

export default function HomeScreen() {
  return (
    <SafeareaView>
<ScrollView contentContainerStyle={{
  padding:14
}} showsVerticalScrollIndicator={false}>
     <Header/>
      <Homepage/>
      </ScrollView>
      


    </SafeareaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    


    gap: 2,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 18,
    justifyContent: 'space-between'
  },
  userpicture: {
    height: 45,
    width: 45,
    borderRadius: 12,
    objectFit: 'cover',
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    marginLeft: 16,
  },
  profileSide: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  searchContainer: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius:8
  }



});

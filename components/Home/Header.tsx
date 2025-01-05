import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ThemedText } from '../ThemedText'

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={20} color={Colors.orange} />
          <ThemedText style={{
            fontSize: 16,
            fontWeight: '700',

          }} >143 Stuggart,NYC</ThemedText>
        </View>
        <View style={
          styles.profileSide
        }>
          <View style={styles.searchContainer}>
            <Feather name="search" size={24} color="black" />
          </View>
          <Image source={{
            uri: "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600"
          }} style={styles.userpicture} />
        </View>
      </View>
  )
}

export default Header

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
  
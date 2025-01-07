import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ThemedText } from '../ThemedText'
import { Image } from 'expo-image'
import { blurhash } from '@/lib/Options'

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Image source={
          "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600"
        } placeholder={{ blurhash }} style={styles.userpicture} />
        <View style={{
          marginLeft: 6
        }}>
          <ThemedText style={{
            fontSize: 18,
            fontWeight: '700',

          }} >Hi, Yosik</ThemedText>
          <ThemedText style={{
            fontSize: 14,
            fontWeight: '700',
            color: '#80858F'

          }} >Lets grab some food !</ThemedText>

        </View>

      </View>
      <View style={
        styles.profileSide
      }>
        <View style={styles.notifContainer}>
          <Ionicons name="notifications-outline" size={32} color="black" />
          <View style={styles.notifdot}>
            <ThemedText style={{
              fontSize: 12,
              color: '#fff'

            }}>9+</ThemedText>
          </View>
        </View>

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



  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 18,
    justifyContent: 'space-between'
  },
  userpicture: {
    height: 54,
    width: 54,
    borderWidth: 3,
    borderRadius: 26,
    objectFit: 'cover',
    borderColor: 'red',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',

  },
  profileSide: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  notifContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 26,
    position: 'relative'
  },
  notifdot: {
    width: 24,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#E45986',
    position: 'absolute',
    top: 7,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }



});

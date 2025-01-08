import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from '@/hooks/useColorScheme.web'

const SafeareaView = ({children}:{children:React.ReactNode}) => {
  const colorScheme=useColorScheme()
  return (
    <SafeAreaView style={{
      flex:1,
      zIndex:2,
    }}>
      {children}
    </SafeAreaView>
  )
}

export default SafeareaView

const styles = StyleSheet.create({})
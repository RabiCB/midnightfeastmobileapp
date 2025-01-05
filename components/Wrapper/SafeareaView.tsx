import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeareaView = ({children}:{children:React.ReactNode}) => {
  return (
    <SafeAreaView >
      {children}
    </SafeAreaView>
  )
}

export default SafeareaView

const styles = StyleSheet.create({})
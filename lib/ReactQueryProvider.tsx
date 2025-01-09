import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

const ReactQueryProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
  )
}

export default ReactQueryProvider

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebaseconfig'
import * as SecureStore from 'expo-secure-store';


export const AppContextProvider=createContext({})
const ContextProvider = (children:React.ReactNode) => {
const [user,setUser]=useState()
async function save(key:any, value:any) {
    await SecureStore.setItemAsync(key, value);
  }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {

        
            setUser(authUser as any);
            
          });
    },[])


    console.log(user)
   

    console.log(user)
  
  return (
    <AppContextProvider.Provider  value={"user"}>
      {
        children
      }
    </AppContextProvider.Provider>
  )
}

export default ContextProvider

const styles = StyleSheet.create({})


export function useAppContext(){
    return AppContextProvider
}
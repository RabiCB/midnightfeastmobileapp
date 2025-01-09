import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SafeareaView from '@/components/Wrapper/SafeareaView'
import { ThemeContext } from '@react-navigation/native'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'



const Loginpage = () => {
  return (

    <SafeareaView>
        <View style={{
            padding:14,
            marginTop:150,
            justifyContent:'center',
            alignItems:'center'
        }}>
<ThemedText type='title' style={{
    marginVertical:16
}}>Welcome Back</ThemedText>
<TextInput  style={styles?.input}  placeholder='email'/>
<TextInput secureTextEntry style={styles?.input} placeholder='password'/>
<Pressable style={styles.lgbtn}>
    <ThemedText style={{
        color:"white"
    }}>Login</ThemedText>
</Pressable>
        </View>
    </SafeareaView>
    
  )
}

export default Loginpage

const styles = StyleSheet.create({
    lgbtn:{
        backgroundColor:Colors.orange,
        padding:14,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:16,
        borderRadius:8,
        width:"100%"
        
     
    },
    input:{
        marginBottom:16,
        paddingVertical:14,
           paddingHorizontal:14,
        backgroundColor:"#D3D3D3",
        borderRadius:8,
        width:"100%"
    }
})
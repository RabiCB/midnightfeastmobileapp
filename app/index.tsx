import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SafeareaView from '@/components/Wrapper/SafeareaView'
import { ThemeContext } from '@react-navigation/native'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { auth } from '@/firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { router } from 'expo-router'
import { getError } from '@/hooks/useGetError'



const Loginpage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')
    const [loading, setLoading] = useState(false)
    const handleLogin = async () => {
       
        if (!email || !password) return alert('Please fill all fields')
            setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    router.push("/(tabs)")

                }
            })
            .catch((error) => {
              const errorMessage=getError(error)
                setError(errorMessage)
                setLoading(false)
            });
    }



    if(loading) return <View   style={{
        flex:1,
        justifyContent: 'center',        alignItems: 'center'  ,
        backgroundColor: "white"
    }}>
        <ActivityIndicator  size={"large"}/>
    </View>
   
    
    return (

        <SafeareaView>
            <View style={{
                padding: 14,
                marginTop: 150,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ThemedText type='title' style={{
                    marginVertical: 16
                }}>Welcome Back</ThemedText>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles?.input} placeholder='email' />
                <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry style={styles?.input} placeholder='password' />
                    {error && <ThemedText style={{
                        color: "red",
                        marginBottom: 8,
                        paddingHorizontal: 14,
                        borderRadius: 8,
                        fontSize:12,
                        alignItems:'flex-start',
                       
                    }}>{error}</ThemedText>}
                <Pressable onPress={handleLogin} style={styles.lgbtn}>
                    <ThemedText style={{
                        color: "white"
                    }}>{loading ? 'Logging in...' : "Login"}</ThemedText>
                </Pressable>
            </View>
        </SafeareaView>

    )
}

export default Loginpage

const styles = StyleSheet.create({
    lgbtn: {
        backgroundColor: Colors.orange,
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 8,
        width: "100%"


    },
    input: {
        marginBottom: 16,
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: "#D3D3D3",
        borderRadius: 8,
        width: "100%"
    }
})
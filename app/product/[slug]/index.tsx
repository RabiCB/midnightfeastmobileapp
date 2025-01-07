import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack, useGlobalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import SafeareaView from '@/components/Wrapper/SafeareaView'
import Detailpage from '@/components/Detailpage/Detailpage'
import { sushiDishes } from '@/PlainData/Data'

const ProductPage = () => {

    const {slug}=useGlobalSearchParams()


    const data=sushiDishes?.find((item)=>item.slug===slug.toString().toLocaleLowerCase())
    
    return (
        <View style={styles.container}>
            
            <StatusBar translucent={true} style='light' backgroundColor="transparent" />

            {/* Image container outside SafeAreaView */}
            <View style={styles.imageContainer}>
                <Image
                    source={data?.image}
                    style={styles.image}
                />
            </View>

            {/* Content container with SafeAreaView */}
            <SafeareaView >
                <ScrollView  >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        position: "absolute",
                        top: 14,
                        left: 14,
                        right: 14,


                    }}>
                        <Pressable onPress={() => router.back()} style={styles.backButtonContainer}>
                            <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                        </Pressable>
                        <Pressable style={styles.backButtonContainer}>
                            <AntDesign name="hearto" size={24} color="black" />
                        </Pressable>
                    </View>

                    <Detailpage />
                </ScrollView>

            </SafeareaView>
        </View>
    )
}

export default ProductPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    image: {
        width: '100%',
        height: 400,
        objectFit: 'cover',

    },
    content: {
        flex: 1,
        zIndex: 2,
    }
    ,
    backButtonContainer: {
        padding: 8,
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
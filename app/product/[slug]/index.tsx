import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack, useGlobalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import SafeareaView from '@/components/Wrapper/SafeareaView'
import Detailpage from '@/components/Detailpage/Detailpage'
import { sushiDishes } from '@/PlainData/Data'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebaseconfig'
import { useQuery } from '@tanstack/react-query'

const ProductPage = () => {

    const { slug,from } = useGlobalSearchParams()

    // const data = sushiDishes?.find((item) => item.slug === slug.toString().toLocaleLowerCase())


    console.log(from,"lddl")

    const getUnique= async () => {
        try{
            const collectionRef = collection(db, `recommededfood`);
    
    const q = query(collectionRef,where("slug","==",slug))
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
    ...doc.data(),
    
    }));
    
    return documents.length > 0 ? documents[0] : null;
        }catch(e){
            console.log(e)
        }
       
    }


    const { isLoading, error, data } = useQuery({
        queryKey: ['detail',slug],
        queryFn: () =>getUnique(),
      }) as any

      console.log(data)


      if(isLoading) return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      }}>
        <ActivityIndicator size="large"/>
        </View>
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
            <SafeareaView>
               
                    <View style={styles.header}>
                        <Pressable onPress={() => router.back()} style={styles.backButtonContainer}>
                            <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                        </Pressable>
                        <Pressable style={styles.backButtonContainer}>
                            <AntDesign name="hearto" size={24} color="black" />
                        </Pressable>
                    </View>

                    
                     <Detailpage data={data as any} />
               
            </SafeareaView>
           
            {/* Fixed Add to Cart Button */}
            <View style={styles.cartContainer}>
                <Pressable style={styles.cartButton}>
                    <ThemedText style={styles.cartButtonText}>ADD TO CART</ThemedText>
                </Pressable>
            </View>

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
        top: -10,
        left: 0,
        right: 0,
    
        zIndex: 1,
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
    },
    content: {
        flex: 1,
        zIndex: 2,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:14,
    },
    backButtonContainer: {
        padding: 8,
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 10,
    },
    cartButton: {
        backgroundColor: Colors.orange,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
    },
})

import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { useGlobalSearchParams } from 'expo-router'
import { ThemedText } from '../ThemedText'
import { Foundation } from '@expo/vector-icons'
import { sushiDishes } from '@/PlainData/Data'
import { blurhash } from '@/lib/Options'
import { Image } from 'expo-image'

const Detailpage = () => {

  const colorScheme = useColorScheme()
  return (
    <View style={[styles.container, {
      backgroundColor: colorScheme === 'dark' ? 'black' : "rgb(242, 242, 242)"

    }]}>
      <View>
        <ThemedText>Sake Nigiri</ThemedText>
        <View><ThemedText>$</ThemedText><ThemedText>100</ThemedText></View>
      </View>
      <View style={[styles.optionscontainer,styles.margininbetween
      ]} >
        <View style={styles.flexwrap}><Foundation name="star" size={24} color={"#FDCC0D"} /> <ThemedText style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}>4.2</ThemedText></View>
        <View style={styles.flexwrap}>
          <Pressable style={styles.buttoncartid}>
            <ThemedText style={{
              color:Colors.orange
            }}>-</ThemedText>
            
          </Pressable>
          <Pressable ><ThemedText>2</ThemedText></Pressable>
          <Pressable style={[styles.buttoncartid,{
            backgroundColor:Colors.orange,
          
          }]}>
            <ThemedText style={{
              color:"#fff"
            }}>
              +
            </ThemedText>
            
          </Pressable>
        </View>
      </View>
      <View style={styles.margininbetween}>
        <ThemedText>Expo Router is a file-based routing framework for React Native and web apps. It manages navigation between screens and uses the same components across multiple platforms. To get started, we need to know about the following conventions</ThemedText>
      </View>
      <View style={styles.margininbetween}>
        <ThemedText type='subtitle'>Ingredients</ThemedText>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={sushiDishes} renderItem={({item})=><View style={{
          marginRight:12
        }}><Image style={styles.ingredients} source={item?.image}  placeholder={{blurhash}}/></View>}/>
      </View>
<Pressable style={{
    position: "absolute",
    bottom: -30,
    alignSelf: "center",  // This centers horizontally
    padding: 12,
    width:"100%",
    alignItems:'center',
    justifyContent:'center',

    backgroundColor: Colors.orange,
    borderRadius: 8,
  }}>
 <ThemedText style={{
  color:"white"
 }}>ADD TO CART</ThemedText>
</Pressable>
    </View>
  )
}

export default Detailpage

const styles = StyleSheet.create({
  margininbetween:{
    marginVertical:10
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    right: 0,
    marginTop: 280,
    minHeight: 300,
    padding: 14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  flexwrap:{
    flexDirection:'row',
    gap:8,
    alignItems:'center'
    
  },
  optionscontainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
  },
  buttoncartid:{
    borderWidth:1,
    borderColor:Colors.orange,
    paddingHorizontal:10,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    width:30,
    paddingVertical:1,
  },
  ingredients:{
    width:80,
    height:80,
    borderRadius:8,
    marginVertical:8,
    objectFit:"cover"
  }
})
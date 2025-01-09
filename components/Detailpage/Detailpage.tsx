import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { useGlobalSearchParams } from 'expo-router'
import { ThemedText } from '../ThemedText'
import { Foundation } from '@expo/vector-icons'
import { sushiDishes } from '@/PlainData/Data'
import { blurhash } from '@/lib/Options'
import { Image } from 'expo-image'

const Detailpage = ({data}:any) => {

  const colorScheme = useColorScheme()
  return (
    <View style={[styles.container, {
      backgroundColor: colorScheme === 'dark' ? 'black' : "rgb(242, 242, 242)"

    }]}>
      <View style={[styles.flexwrap,{
        justifyContent:'space-between',
 
      }]}>
        <ThemedText type='subtitle'>{data?.name}</ThemedText>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          
        }}><ThemedText style={{
          marginTop:10,
          color:Colors.orange
        }}>$</ThemedText><ThemedText type='subtitle'>{data?.price}</ThemedText></View>
      </View>
      <View style={[styles.optionscontainer,styles.margininbetween
      ]} >
        <View style={styles.flexwrap}><Foundation name="star" size={24} color={"#FDCC0D"} /><ThemedText style={{
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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom: 80,
 
       
      }}>
      <View style={styles.margininbetween}>
        <ThemedText>{data?.description}</ThemedText>
      </View>

     
      <View style={styles.margininbetween}>
        <ThemedText type='subtitle'>Ingredients</ThemedText>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={sushiDishes} renderItem={({item})=><View style={{
          marginRight:12
        }}><Image style={styles.ingredients} source={item?.image}  placeholder={{blurhash}}/></View>}/>
      </View>
      </ScrollView>
     

    </View>
  )
}

export default Detailpage

const styles = StyleSheet.create({
  margininbetween:{
    marginVertical:10
  },
  container: {
  
    flex: 1,
    right: 0,
    marginTop:150,
   
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
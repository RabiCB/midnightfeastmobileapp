import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { fastFoods, sushiDishes } from '@/PlainData/Data'


type ItemProps = {name:string,image:string};
const Itemcard=({image,name}:ItemProps)=>(
<View style={{
    marginRight:10,
    backgroundColor:"#fff",
    flexDirection:'row',
    gap:12,
    borderRadius:40,
    paddingVertical:10,
   alignItems:'center',
   paddingLeft:8,
   paddingRight:20

    
}}>
    <Image source={{
        uri:image
    }} style={styles.image}/>
    <ThemedText style={{
      fontWeight:'700'
    }}>{name}</ThemedText>
</View>
)
const Homepage = () => {
  return (
    <View>
      <ThemedText type='title'>
        What would you 
      </ThemedText>
      <ThemedText type='title' style={{
        marginTop:6
      }}>
        Like to eat ?
      </ThemedText>
      <View style={{
        marginTop:16,
        marginBottom:16
      }}>
        <FlatList showsHorizontalScrollIndicator={false}  keyExtractor={item => item.name
        } horizontal  data={fastFoods} renderItem={({item})=>
            <Itemcard name={item?.name} image={item?.image}/>

        }/>
        {/* {
            sushiDishes?.map((d)=>(
                <View>
                    <ThemedText>{d.name}</ThemedText>
                    <ThemedText>{d.description}</ThemedText>
                    <ThemedText>{d.image}</ThemedText>
                </View>
            ))
        } */}
      </View>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
    image:{
        width:60 ,
           height:60,
   
        borderRadius:30
        
    }
})
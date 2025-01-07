import { FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { fastFoods, sushiDishes } from '@/PlainData/Data'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import { blurhash } from '@/lib/Options';
import { Link, router } from 'expo-router';


type ItemProps = { name: string, image: string };
type ItemPropsMain = { name: string, image: string,price:string|number,slug:string };
const Itemcard = ({ image, name }: ItemProps) => (
  <View style={{
    marginRight: 10,
    backgroundColor: "#FEFEFE",


    gap: 12,
    borderRadius: 10,




    paddingVertical: 10,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 20


  }}>
    <Image placeholder={{ blurhash }} source={image} style={styles.image} />
    <ThemedText style={{
      fontWeight: '700',
      color: '#999CA4',
      fontSize: 14
    }}>{name}</ThemedText>
  </View>
)

const MainCard=({image,name,price,slug}:ItemPropsMain)=>(
  <TouchableOpacity onPress={()=>{
    router.push({
      pathname:`/product/[slug]`,
      params:{
        slug:`${slug}`
      }
    })
  }} style={{
    marginLeft: 10,
    backgroundColor: "#FEFEFE",
    borderRadius: 10,
    gap: 12,
    
    width:220,
   
    height:280,
  
  
  
    
    
  }}>
    <Image placeholder={{ blurhash }} source={image} style={{
      width: '100%',
      height: '60%',
      borderRadius:12,
      borderColor: '#F0F0F0',
      overflow: 'hidden'
    }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <ThemedText style={{
      fontWeight: '700',
      color: '#454A58',
     
    }} type='subtitle'>{name}</ThemedText>
    <ThemedText style={{
      fontWeight: '700',
      color: '#999CA4',
      
    }} type='subtitle'>${price}</ThemedText>
    </ScrollView>
   
   
  
  </TouchableOpacity>
)
const Homepage = () => {
  return (
    <View>
      <View style={styles?.searchContainer}>
        <AntDesign name="search1" size={28} color="black" />
        <TextInput placeholder='Search for food' style={styles.input} />
        <Ionicons name="filter" size={28} color="black" />
      </View>
      <View style={styles.headerTitle}>
        <ThemedText type='subtitle' style={{
          color: '#454A58'
        }}>
          Fast Foods
        </ThemedText>

        <TouchableOpacity style={{
          flexDirection: 'row',
          gap: 1,
          alignItems: 'center'
        }}>
          <ThemedText style={{
            color: Colors.orange
          }} type='default'>See more  </ThemedText>
          <AntDesign name="arrowright" size={20} color={Colors?.orange} />
        </TouchableOpacity>

      </View>
      <View style={{
        marginTop: 16,
        marginBottom: 16
      }}>

        <FlatList showsHorizontalScrollIndicator={false} keyExtractor={item => item.name
        } horizontal data={fastFoods} renderItem={({ item }) =>
          <Itemcard name={item?.name} image={item?.image} />

        } />


      </View>
      <View style={styles.headerTitle}>
        <ThemedText type='subtitle' style={{
          color: '#454A58'
        }}>
          Food For You
        </ThemedText>

        <TouchableOpacity style={{
          flexDirection: 'row',
          gap: 1,
          alignItems: 'center'
        }}>
          <ThemedText style={{
            color: Colors.orange
          }} type='default'>See more  </ThemedText>
          <AntDesign name="arrowright" size={20} color={Colors?.orange} />
        </TouchableOpacity>

      </View>
      <View style={{
        marginTop: 16,
        marginBottom: 16
      }}>

        <FlatList showsHorizontalScrollIndicator={false} keyExtractor={item => item.name
        } horizontal data={sushiDishes} renderItem={({ item }) =>
          <MainCard price={"10"} slug={item?.slug}  name={item?.name} image={item?.image} />

        } />


      </View>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,


  },
  image: {
    width: 60,
    height: 60,

    borderRadius: 30

  },
  searchContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 12,

    borderRadius: 28,
  },
  input: {

    fontSize: 16,
    paddingHorizontal: 10,
    width: 200,
    flex: 1,
    marginLeft: 10,
    fontWeight: "700"
  },
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    gap: 4, // Space between elements
  },
  card: {
    padding: 10,
  },
  title: {
    fontWeight: '700',
    color: '#454A58',
  },
  price: {
    fontWeight: '700',
    color: '#999CA4',
  },

})
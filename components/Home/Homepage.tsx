import { Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { ThemedText } from '../ThemedText'
import { fastFoods, sushiDishes } from '@/PlainData/Data'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import { blurhash } from '@/lib/Options';
import { Link, router } from 'expo-router';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseconfig';
import { useQuery } from '@tanstack/react-query';


type ItemProps = { name: string, image: string };
type ItemPropsMain = { name: string, image: string, price: string | number, slug: string };
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

const MainCard = ({ image, name, price, slug }: ItemPropsMain) => (
  <TouchableOpacity onPress={() => {
    router.push({
      pathname: `/product/[slug]`,
      params: {
        slug: `${slug}`,
        
        from:'recommendedfood'

      }


    })
  }} style={{
    marginRight: 10,
    backgroundColor: "#FEFEFE",
    borderRadius: 10,
    gap: 12,
    paddingHorizontal:10,
    paddingVertical:6,

    width: 220,

    height: 280,





  }}>
    <Image placeholder={{ blurhash }} source={image} style={{
      width: '100%',
      height: '60%',
      borderRadius: 12,
      borderColor: '#F0F0F0',
      overflow: 'hidden'
    }} />

    <View style={{

      width: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ThemedText style={{
        fontWeight: '700',
        color: '#454A58',
      

      }} type='default'>{name?.substring(0,23)}{name?.length>23 &&`...`}</ThemedText>
      <ThemedText style={{
        fontSize:12,
        color: '#999CA4',
        
      }}>Main course</ThemedText>
      
    </View>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      backgroundColor:"#F6F6F6",
      paddingVertical: 2,
      paddingHorizontal: 4,
      marginBottom:4,
      borderRadius:6
     
      
    }}>
      <ThemedText style={{
        fontWeight: '700',
        color: '#999CA4',
        fontSize: 14
      }}>${price}</ThemedText>
      <Pressable style={{
        backgroundColor:Colors?.orange,
        borderRadius: 16,
        alignItems:'center',
        display:'flex',
        
        width: 32,
        height: 32,
        justifyContent: 'center',
      }}>
        <ThemedText style={{
          color:'white'
        }}>+</ThemedText>
      </Pressable>
    </View>





  </TouchableOpacity>
)
const Homepage = () => {



  async function getData(){
    const querySnapshot = await getDocs(collection(db, "fastFoods"));
    
   return querySnapshot.docs.map((doc) => doc.data())
   
  }

  async function getRecommendedfood(){
    const querySnapshot = await getDocs(collection(db, "recommededfood"));
    
   return querySnapshot.docs.map((doc) => doc.data())
   
  }

  const { isPending, error, data:fastfood } = useQuery({
    queryKey: ['fastfoods'],
    queryFn: () =>getData(),
  })

  const {  data:recommendedfood } = useQuery({
    queryKey: ['recommededfoods'],
    queryFn: () =>getRecommendedfood(),
  })

  const recommendedFoods = [
    {
      name: "Margherita Pizza",
      price: 12.99,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      slug: "margherita-pizza",
      description: "A classic Italian pizza with a thin crust, topped with tomato sauce, fresh mozzarella, and basil.",
    },
    {
      name: "Cheeseburger",
      price: 8.99,
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
      slug: "cheeseburger",
      description: "A delicious beef patty with melted cheese, lettuce, tomato, and pickles, all sandwiched between a soft bun.",
    },
    {
      name: "Sushi Platter",
      price: 19.99,
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
      slug: "sushi-platter",
      description: "An assortment of fresh sushi, including nigiri, sashimi, and rolls, made with premium fish and vegetables.",
    },
    {
      name: "Pasta Carbonara",
      price: 14.99,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      slug: "pasta-carbonara",
      description: "A creamy pasta dish made with eggs, Parmesan cheese, pancetta, and black pepper, creating a rich and savory flavor.",
    },
    {
      name: "Grilled Steak",
      price: 24.99,
      image: "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg",
      slug: "grilled-steak",
      description: "A perfectly grilled steak, seasoned with salt and pepper, and served with your choice of sides.",
    },
    {
      name: "Caesar Salad",
      price: 10.99,
      image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
      slug: "caesar-salad",
      description: "Crisp romaine lettuce tossed with creamy Caesar dressing, croutons, and Parmesan cheese.",
    },
    {
      name: "Chocolate Cake",
      price: 6.99,
      image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
      slug: "chocolate-cake",
      description: "A rich and moist chocolate cake layered with decadent chocolate frosting, perfect for chocolate lovers.",
    },
  ];
  
  



  const uploadFastFoods = async () => {
    try {
      const fastFoodsCollection = collection(db, 'recommededfood'); // Collection name: "fastFoods"
      for (const food of recommendedFoods) {
        await addDoc(fastFoodsCollection, food);
        console.log(`${food.name} added successfully.`);
      }
      
    } catch (error) {
      console.error("Error uploading fast foods:", error);
    }
  };



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
         <Button
      title="Upload Fast Foods"
      onPress={() => uploadFastFoods()}
    />

        <FlatList showsHorizontalScrollIndicator={false} keyExtractor={item => item.name
        } horizontal data={fastfood} renderItem={({ item }) =>
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
        } horizontal data={recommendedfood} renderItem={({ item }) =>
          <MainCard price={"10"} slug={item?.slug} name={item?.name} image={item?.image} />

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
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

export const Skeleton = () => (
    <ScrollView>
    {[...Array(3)].map((_, index) => (
      <View key={index} style={styles.skeletonContainer}>
        {/* Profile Section */}
        

        {/* Post Image Section */}
        <ContentLoader
          height={200}
          width={300}
          speed={1}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          viewBox="0 0 300 200"
        >
          <Rect x="0" y="0" width="100%" height="100%" />
        </ContentLoader>

      
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
    skeletonContainer: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
  });
  export default Skeleton

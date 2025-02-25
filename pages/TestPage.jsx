import React from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import ProductCard from "@/components/ui/cards/ProductCard";
import { ThemedText } from "@/components/ThemedText";

export default function TestPage() {  
  return (
    <ScrollView
    horizontal={true}
    alwaysBounceHorizontal={true}
    style={styles.horizontalScrollView}>
      <View style={styles.contentContainer}>
        <ThemedText>Test Page</ThemedText>
        <ProductCard /> 
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  horizontalScrollView: {
    backgroundColor: 'pink',
    width: '100%',
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 55,
  }
})

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export function Catalog() {
  const catalog = useSelector(state => state);

  console.log(catalog);
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Catalog</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
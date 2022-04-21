import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import { CatalogItem } from './CatalogItem';

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    });
  }, []);
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Catalog</Text>

      {catalog.map(product => <CatalogItem key={product.id}  product={product}/>)}
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
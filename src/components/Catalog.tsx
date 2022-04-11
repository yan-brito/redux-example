import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import api from '../services/api';
import { AddProductToCard } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  const dispatch = useDispatch();

  function handleAddProductToCart(product: IProduct) {
    dispatch(AddProductToCard(product))
  }

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    });
  }, []);
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Catalog</Text>

      {catalog.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Text style={styles.productTitle} >{ product.title } - </Text>
          <Text> R$ { product.price } </Text>
          <Button 
            title="Comprar" 
            onPress={() => handleAddProductToCart(product)}
          />
        </View>
      ))}
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
  },
  productContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600'
  }
});
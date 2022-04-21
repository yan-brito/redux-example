import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import api from '../services/api';
import { emptyCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { CatalogItem } from './CatalogItem';

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  const dispatch = useDispatch();

  const handleEmptyCart = useCallback(() => {
    dispatch(emptyCart())
  }, [dispatch])

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    });
  }, []);
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo</Text>

      {catalog.map(product => <CatalogItem key={product.id}  product={product}/>)}

      <Button 
        title="Esvaziar carrinho"
        onPress={handleEmptyCart}
      />
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
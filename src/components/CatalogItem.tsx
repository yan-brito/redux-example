import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { AddProductToCard } from '../store/modules/cart/actions';

import { IProduct } from '../store/modules/cart/types';

type CatalogItemProps = {
  product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {

  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(AddProductToCard(product))
  }, [dispatch, product])

  return(
    <View style={styles.container}>
      <Text style={styles.title} >{ product.title } - </Text>
      <Text> R$ { product.price } </Text>
      <Button 
        title="Comprar" 
        onPress={handleAddProductToCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  }
});
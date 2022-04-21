import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCardRequest } from '../store/modules/cart/actions';

import { IProduct } from '../store/modules/cart/types';

type CatalogItemProps = {
  product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {

  const dispatch = useDispatch();

  const hasFailedOnStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCardRequest(product))
  }, [dispatch, product])

  return(
    <View style={styles.container}>
      <Text style={[styles.title, { color: hasFailedOnStockCheck ? 'red' : '#000' }]} >{ product.title } - </Text>
      <Text> R$ { product.price } </Text>
      <Button 
        title="Comprar" 
        onPress={handleAddProductToCart}
        disabled={hasFailedOnStockCheck}
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
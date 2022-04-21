import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeProductFromCart } from '../store/modules/cart/actions';
import { ICartItem } from '../store/modules/cart/types';

type CartItemProps = {
  item: ICartItem;
};

export function CartItem({ item }: CartItemProps) {

  const dispatch = useDispatch();

  const handleRemoveProductFromCart = useCallback(() => {
    dispatch(removeProductFromCart(item.product.id))
  }, [dispatch, item])

  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.removeFromCartButton}
        onPress={handleRemoveProductFromCart}
      >
        <Text style={styles.removeFromCartButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>{ item.product.title }</Text>
      <Text style={styles.itemText}>R$ { item.product.price }</Text>
      <Text style={styles.itemText}>{ item.quantity }</Text>
      <Text style={styles.itemText}>{ (item.product.price * item.quantity).toFixed(2) }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  removeFromCartButton: {
    position: 'absolute',
    left: -14,
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  removeFromCartButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  itemText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center'
  }
});

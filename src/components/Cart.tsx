import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';
import { CartItem } from './CartItem';

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return(
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <Text style={styles.title}>Produto</Text>
        <Text style={styles.title}>Preço</Text>
        <Text style={styles.title}>Quantidade</Text>
        <Text style={styles.title}>Subtotal</Text>
      </View>
      { cart.map(item => (
        <CartItem item={item} key={item.product.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  lineContainer: {
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
  title: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center'
  },
  lineText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center'
  }
});
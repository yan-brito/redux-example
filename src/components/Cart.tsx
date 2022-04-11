import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

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
        <View key={item.product.id} style={styles.lineContainer}>
          <Text style={styles.lineText}>{ item.product.title }</Text>
          <Text style={styles.lineText}>R$ { item.product.price }</Text>
          <Text style={styles.lineText}>{ item.quantity }</Text>
          <Text style={styles.lineText}>{ (item.product.price * item.quantity).toFixed(2) }</Text>
        </View>
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
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
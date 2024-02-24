import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function Checkout({ route }) {
  const navigation = useNavigation();
  const { cartItems } = route.params;
  const [items, setItems] = useState(cartItems);

  useFocusEffect(
    React.useCallback(() => {
      setItems(cartItems);
    }, [cartItems])
  );

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleUpdateItem = (itemId) => {
    
    navigation.navigate('Home');
  };

  const handlePayment = () => {
    
    Alert.alert('Payment', 'Payment successful');
    navigation.navigate('Finished');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Checkout</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text style={styles.itemName}>{item.name}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteItem(item.id)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => handleUpdateItem(item.id)}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
  },
  updateButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  payButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
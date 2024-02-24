import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Wedding() {

  const navigation = useNavigation();
  
  const wedding = [
    { id: 1, name: 'Structure Cake A', price: '$3.99', image: require('./Wedding/weddingimg1.jpeg') },
    { id: 2, name: 'Structure Cake B', price: '$2.99', image: require('./Wedding/weddingimg2.jpeg') },
    
  ];

  const handleCheckout = () => {
    navigation.navigate('Checkout', { cartItems: wedding });
  };

  return (
    
    <View style={styles.container}>
    <Text style={styles.pageTitle}>Wedding Cakes</Text>
      {wedding.map((wedding) => (
        <View key={wedding.id} style={styles.weddingItem}>
          <Image source={wedding.image} style={styles.weddingImage} />
          <Text style={styles.weddingName}>{wedding.name}</Text>
          <Text style={styles.weddingPrice}>{wedding.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonLabel}>Checkout</Text>
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
  weddingItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  weddingImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  weddingName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weddingPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#6A0DAD',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#6A0DAD',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Cupcake() {

  const navigation = useNavigation();
  
  const cupcakes = [
    { id: 1, name: 'Dark Chocolate Cupcake', price: '$3.99', image: require('./Cupcake/DarkChocolate.jpg') },
    { id: 2, name: 'White Chocolate Cupcake', price: '$2.99', image: require('./Cupcake/WhiteChocolateCupcakes.jpg') },
    
  ];

  const handleCheckout = () => {
    navigation.navigate('Checkout', { cartItems: cupcakes });
  };

  return (
    
    <View style={styles.container}>
    <Text style={styles.pageTitle}>CupCakes</Text>
      {cupcakes.map((cupcake) => (
        <View key={cupcake.id} style={styles.cupcakeItem}>
          <Image source={cupcake.image} style={styles.cupcakeImage} />
          <Text style={styles.cupcakeName}>{cupcake.name}</Text>
          <Text style={styles.cupcakePrice}>{cupcake.price}</Text>
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
  cupcakeItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  cupcakeImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  cupcakeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cupcakePrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FF69B4',
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
    backgroundColor: '#FF69B4',
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

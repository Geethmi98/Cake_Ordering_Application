import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Customaize() {

  const navigation = useNavigation();
  
  const customaize = [
    { id: 1, name: 'Butter Cake', price: '$3.99', image: require('./Customize/butter.jpg') },
    { id: 2, name: 'Chocolate Cake', price: '$2.99', image: require('./Customize/chocolate.jpg')},
    
  ];

  const handleCheckout = () => {
    navigation.navigate('Checkout', { cartItems: customaize });
  };

  return (
    
    <View style={styles.container}>
    <Text style={styles.pageTitle}>Customaize Cake</Text>
      {customaize.map((customaize) => (
        <View key={customaize.id} style={styles.customaizeItem}>
          <Image source={customaize.image} style={styles.customaizeImage} />
          <Text style={styles.customaizeName}>{customaize.name}</Text>
          <Text style={styles.customaizePrice}>{customaize.price}</Text>
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
  customaizeItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  customaizeImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  customaizeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  customaizePrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#8B4513',
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
    backgroundColor: '#8B4513',
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

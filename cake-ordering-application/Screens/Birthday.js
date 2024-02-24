import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Birthday() {

  const navigation = useNavigation();
  
  const birthday = [
    { id: 1, name: 'Dark Chocolate', price: '$3.99', image: require('./Birthday/BdayDark.jpg') },
    { id: 2, name: 'Milk Chocolate', price: '$2.99', image: require('./Birthday/BdayMilk.jpg') },
    
  ];

  const handleCheckout = () => {
    navigation.navigate('Checkout', { cartItems: birthday });
  };

  

  return (
    
    <View style={styles.container}>
    <Text style={styles.pageTitle}>Birthday</Text>
      {birthday.map((birthday) => (
        <View key={birthday.id} style={styles.cupcakeItem}>
          <Image source={birthday.image} style={styles.birthdayImage} />
          <Text style={styles.birthdayName}>{birthday.name}</Text>
          <Text style={styles.birthdayPrice}>{birthday.price}</Text>
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
  birthdayImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  birthdayName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  birthdayPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FF1493',
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
    backgroundColor: '#FF1493',
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

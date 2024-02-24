import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  
  const navigation = useNavigation();

  const handleCategoryPress1= (category) => {
    
    if (category === 'Birthday') {
      navigation.navigate('Birthday');
    } 
    else {
      navigation.navigate('Category', { category });
    }
  };

  const handleCategoryPress2 = (category) => {
    
    if (category === 'Wedding') {
      navigation.navigate('Wedding');
    } 
    else {
      navigation.navigate('Category', { category });
    }
  };

  const handleCategoryPress3 = (category) => {
    
    if (category === 'Cupcake') {
      navigation.navigate('Cupcake');
    } 
    else {
      navigation.navigate('Category', { category });
    }
  };

  const handleCategoryPress4 = (category) => {
    
    if (category === 'Customaize') {
      navigation.navigate('Customaize');
    } 
    else {
      navigation.navigate('Category', { category });
    }
  };

  return (

    <View style={styles.container}>

    <Image source={require('./loginlogo.jpg')} 
    style={[styles.image, { filter: 'brightness(2500%)' }]} />

      <TouchableOpacity
        style={styles.categoryButtonBirthday}
        onPress={() => handleCategoryPress1('Birthday')}>
        <Text style={styles.categoryButtonText}>Birthday Cakes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButtonWedding}
        onPress={() => handleCategoryPress2('Wedding')}>
        <Text style={styles.categoryButtonText}>Wedding Cakes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButtonCupcakes}
        onPress={() => handleCategoryPress3('Cupcake')}>
        <Text style={styles.categoryButtonText}>CupCakes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButtonCustom}
        onPress={() => handleCategoryPress4('Customaize')}>
        <Text style={styles.categoryButtonText}>Customazie Cakes</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black'
},

categoryButtonBirthday: {
    backgroundColor: '#FF1493',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    marginTop:50
  },

  image: {
    marginTop:100,
    width: 200,
    height: 200,  
  },

  categoryButtonWedding: {
    backgroundColor: '#6A0DAD',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },

  categoryButtonCupcakes: {
    backgroundColor: '#FF69B4',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },

  categoryButtonCustom: {
    backgroundColor: '#8B4513',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },

  categoryButtonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'lightgray',
  },
});

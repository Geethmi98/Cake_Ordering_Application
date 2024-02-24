import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LandingScreen() {

  const navigation = useNavigation();

  return (
    
    <ImageBackground source={require('./img.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Cake Bilss!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40, 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 75,
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    width:200,
    height:50
    
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
    
  },
});




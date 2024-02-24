import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native';


export default function SignupScreen() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleLogin = () => {

    if (!email || !password || !confirmPassword || !phone) {
      
      Alert.alert('Error', 'Please fill in all the required fields');
    } 
    else if (password !== confirmPassword) {

      Alert.alert('Error', 'Passwords do not match');
    } 
    else {
    
      console.log('Successfully Registered');
    }
};

  return (
    
    <ImageBackground source={require('./img.jpeg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TextInput
            style={styles.inputUser}
            placeholder="User Name"
            placeholderTextColor="gray"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.inputPhone}
            placeholder="Phone Number"
            placeholderTextColor="gray"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.inputConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
          <Text style={styles.signupLink} onPress={() => navigation.navigate('Login')}>
          Login
          </Text>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity value as needed
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  
  inputUser: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 100,
    paddingHorizontal: 10,
    color: 'white',
  },
  inputPhone: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    color: 'white',
  },
  inputPassword: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    color: 'white',
  },
  inputConfirmPassword: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
    marginTop:180,
    marginBottom:5
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
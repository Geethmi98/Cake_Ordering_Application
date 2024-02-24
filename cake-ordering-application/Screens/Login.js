import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {

    if(name=="john" && password=="abs123"){
          Alert.alert('Successfully Logged In!!');
          navigation.navigate('Home');
        }
    else{
          Alert.alert("Incorrect username or Password");
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
            value={name}
            onChangeText={text => setName(text)}
          />

          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            Don't have an account?{' '}
          <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
            Register
          </Text>
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
    //marginTop: 250,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  inputPassword: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
    marginTop:100,
    marginBottom:10
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    marginBottom: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white'
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  
});
import React from 'react';

import Landing from './Screens/Landing';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import Checkoutc from './Screens/Checkout';
import Finished from './Screens/Finished';

import Wedding from './Screens/Wedding';
import Cupcake from './Screens/Cupcake';
import Birthday from './Screens/Birthday';
import Customaize from './Screens/Customaize';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App(){

  return(

    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cupcake" component={Cupcake}/>
        <Stack.Screen name="Birthday" component={Birthday}/>
        <Stack.Screen name="Wedding" component={Wedding}/>
        <Stack.Screen name="Customaize" component={Customaize}/>
        <Stack.Screen name="Checkout" component={Checkoutc}/>
        <Stack.Screen name="Finished" component={Finished}/>

      </Stack.Navigator>  
    </NavigationContainer>
  );
}



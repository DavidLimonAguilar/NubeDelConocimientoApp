import React from 'react';
import 'react-native-gesture-handler';
import {Image, Text, TouchableNativeFeedback, View} from 'react-native';
import Inicial from './src/screens/Inicial';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {Rutas} from './src/Navigator/Rutas';



const Inicio = ()=> {
  return(
   <NavigationContainer>
     <Rutas/>
   </NavigationContainer>
  );
}

export default Inicio;

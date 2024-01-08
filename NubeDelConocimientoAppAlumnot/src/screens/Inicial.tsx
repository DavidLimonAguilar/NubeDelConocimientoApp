import React from 'react';
import {Image, Text, TouchableNativeFeedback, View} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

const Inicial  = ({navigation}:Props) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{flex: 1, width: '100%'}}
        source={require('../img/1.png')}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#60ECF5',
          width: '60%',
          height: '15%',
          marginHorizontal: '20%',
          borderRadius: 20,
          top: '10%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: '29%',
            marginTop: '7%',
          }}>
          Nube del
        </Text>
        <Text
          style={{
            position: 'absolute',
            fontSize: 25,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: '19%',
            top: '45%',
          }}>
          Conocimiento
        </Text>
      </View>
      <TouchableNativeFeedback
      onPress = {() => navigation.navigate('Login')}
      background={ TouchableNativeFeedback.Ripple('#28425B',false,1)}
      >
        <View style={{
          position: 'absolute',
          backgroundColor: '#60ECF5',
          width: '60%',
          height: '10%',
          marginHorizontal: '20%',
          borderRadius: 20,
          top: '35%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}>
          <Text style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 22,
            top:'25%',
            marginHorizontal: '23%'
          }}>Iniciar Sesión</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Inicial;

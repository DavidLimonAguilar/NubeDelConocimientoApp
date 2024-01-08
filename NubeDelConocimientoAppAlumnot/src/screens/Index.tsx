import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import { RootStackParams } from '../Navigator/Rutas';

interface Props extends StackScreenProps<RootStackParams,'Index'>{}

export const Index = ({route,navigation}: Props) => {
  const params = route.params;
  const [apodo, setApodo] = useState(params.apodo);
  useEffect(() => {
    obtenerApodo()
  })
  

  const obtenerApodo = () =>{
    //console.log(correo);
    //console.log(password);
    const datosUsuario: any[][] = [];

    fetch('http://nube-del-conocimiento.com/NubeFuncion/idJugador/getApodo.php',{
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nControl: params.numControl
      })
    }).then((response)=> response.json())
    .then((respuestaJson) => {
      //console.log(respuestaJson);
      //console.log(respuestaJson[0].apodo);
      setApodo(respuestaJson[0].apodo);
    }).catch((error)=>{
      console.error(error);
    })
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#D2FCFF',
      }}>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '100%',
          height: '65%',
          borderRadius: 800,
          top: '-50%',
          right: '-10%',
        }}></View>
      <Text></Text>
      <Image
        style={{
          position: 'absolute',
          top: '25%',
          left: '-10%',
        }}
        source={require('../img/nube.png')}
      />
      <Image
        style={{
          position: 'absolute',
          top: '25%',
          left: '77%',
        }}
        source={require('../img/nube.png')}
      />
      <Text
        style={{
          color: '#2DDA93',
          fontWeight: 'bold',
          fontSize: 22,
          position: 'absolute',
          top: '24%',
          left: '23%',
        }}>
        Nube del Conocimiento
      </Text>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.0287)',
          width: '90%',
          height: '8%',
          top: '40%',
          marginHorizontal: '5%',
          borderRadius: 40,
          paddingVertical: '5%',
        }}>
        <TouchableNativeFeedback
        onPress={() => navigation.navigate("Mapa")}
        >
          <View
            style={{
              backgroundColor: '#FFF',
              width: '20%',
              height: '150%',
              borderRadius: 40,
              paddingHorizontal: '5%',
              marginLeft: '8%',
            }}>
            <Text
              style={{
                color: '#2DDA93',
                marginLeft: '15%',
              }}>
              Play
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback 
         onPress={() => navigation.navigate('PerfilAlumno',{
          numControl: params.numControl,
          correo: params.correo,
          nombre: params.nombre,
          password: params.password,
          aPaterno: params.aPaterno,
          aMaterno: params.aMaterno,
          apodo: params.apodo
         })}
        >
          <View
            style={{
              backgroundColor: '#FFF',
              width: '20%',
              height: '150%',
              borderRadius: 40,
              left: '40%',
              top: '-150%',
            }}>
            <Text
              style={{
                position: 'absolute',
                color: '#2DDA93',
                paddingLeft: '25%',
              }}>
              Perfil
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => navigation.navigate("Login")}
        >
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#FFF',
              width: '20%',
              height: '150%',
              borderRadius: 40,
              marginVertical: '.2%',
              left: '70%',
              top: '100%',
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#2DDA93',
              }}>
              Salir
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '100%',
          height: '65%',
          borderRadius: 800,
          bottom: '-5%',
          right: '0%',
        }}></View>
      <Image
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '41%',
        }}
        source={require('../img/gofer.png')}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#FFF',
          width: '50%',
          height: '6%',
          //paddingLeft: '30%',
          paddingVertical: '5%',
          borderRadius: 100,
          bottom: '10%',
          left: '25%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#2DDA93',
            fontWeight: 'bold',
          }}>
          {
            apodo
          }
        </Text>
      </View>
    </View>
  );
};

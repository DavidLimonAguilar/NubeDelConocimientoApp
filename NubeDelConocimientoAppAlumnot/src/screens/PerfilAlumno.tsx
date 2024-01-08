import { NavigationHelpersContext } from '@react-navigation/native';
import { Header, StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import {View, Text, Image, TouchableNativeFeedback, Modal, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import { RootStackParams } from '../Navigator/Rutas';

interface Props extends StackScreenProps<RootStackParams,'PerfilAlumno'>{}

export const PerfilAlumno = ({route,navigation}: Props) => {
  
  const [apodo, setApodo] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const params = route.params;
  let actualizar: string = params.apodo;
  const [apodoActual, setapodoActual] = useState(params.apodo);
  

  const showAlert = () =>{
    Alert.alert(
      "Error",
      "Error al actualizar el apodo",
      [
        {
          text: "OK", onPress: () => console.log("Ok Pressed")
        }
      ]
    )
  }
  
  const regresar = () => {
    navigation.navigate('Index',{
      numControl: params.numControl,
      correo: params.correo,
      nombre: params.nombre,
      password: params.password,
      aPaterno: params.aPaterno,
      aMaterno: params.aMaterno,
      apodo: apodoActual
    });
  }
  const actualizarApodo = () =>{
    //console.log(correo);
    //console.log(password);
    const datosUsuario: any[][] = [];
    //console.log(apodo);
    //console.log(params.numControl);
    fetch('http://nube-del-conocimiento.com/NubeFuncion/idJugador/actApodo.php',{
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nControl: params.numControl,
        apodo: apodo
      })
    }).then((response)=> response.json())
    .then((respuestaJson) => {
      console.log(respuestaJson)
      /*for(let i in respuestaJson){
        datosUsuario.push([i,respuestaJson[i]])
      }*/
      //actualizar = apodo;
      setapodoActual(apodo);
      /*
      navigation.navigate('Index',{
      numControl: params.numControl,
      correo: params.correo,
      nombre: params.nombre,
      password: params.password,
      aPaterno: params.aPaterno,
      aMaterno: params.aMaterno,
      apodo: apodoActual
    });
       */
      setIsVisible(false);
    }).catch((error)=>{
      showAlert();
    })
    
  }


  return (
    
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
        
      <View
        style={{
          backgroundColor: '#2DDA93',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            width: '100%',
            height: '135%',
            borderRadius: 800,
            top: '-10%',
            right: '-60%',
          }}></View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            width: '55%',
            height: '82.5%',
            borderRadius: 800,
            top: '-10%',
            right: '55%',
          }}></View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            width: '55%',
            height: '82.5%',
            borderRadius: 800,
            top: '80%',
            right: '55%',
          }}></View>
        <Image
          source={require('../img/perfil.png')}
        />
        <Text
          style={{
            color: '#FFF',
            fontWeight: 'bold',
            marginTop: 15,
            fontSize: 18,
          }}>
            
          {params.nombre + " "}
          {params.aPaterno + " "}
          {params.aMaterno}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 24,
          color: '#000',
          fontWeight: 'bold',
          marginLeft: '20%',
          marginTop: '10%',
        }}>
        Apodo
      </Text>
      <Text
        style={{
          backgroundColor: '#2DDA93',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          width: '70%',
          marginLeft: '18%',
          borderRadius: 100,
          paddingLeft: '5%',
          height: '6%',
          paddingTop: '2%'
        }}>{apodoActual
        }
        </Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        left:-20
      }}>
      <View
        style={{
          marginTop: '5%',
          backgroundColor: '#2DDA93',
          width: '30%',
          height: '60%',
          borderRadius: 36,
          left: '31%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          marginLeft: '6%'
        }}>
        <TouchableNativeFeedback
        onPress={() => {
          setIsVisible(true)
        }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 10,
              fontWeight: 'bold',
              marginHorizontal: '15%',
              marginVertical: '5%',
            }}>
            Cambiar Apodo
          </Text>
        </TouchableNativeFeedback>        
      </View>
      <View
        style={{
          marginTop: '5%',
          backgroundColor: '#2DDA93',
          width: '30%',
          height: '60%',
          borderRadius: 36,
          left: '31%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          marginLeft: '6%'
        }}>
        <TouchableNativeFeedback
        onPress={() => {
          regresar();
        }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 10,
              fontWeight: 'bold',
              marginHorizontal: '30%',
              marginVertical: '5%',
            }}>
            Regresar
          </Text>
        </TouchableNativeFeedback>
        
      </View>
      </View>
      {//modal
       }
       <Modal
       animationType="fade"
       visible={isVisible}
       transparent={ true}
       >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>

          <View
        style={{
          position: 'absolute',
          backgroundColor: '#2DDA93',
          width: '80%',
          height: '20%',
          top: '35%',
          borderRadius: 30,
          marginHorizontal: '10%',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
            left: '41%',
            top: '10%',
          }}>
          Apodo
        </Text>
        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            width: '80%',
            marginHorizontal: '10%',
            top: '15%',
            borderRadius: 10,
          }}
          placeholder="Apodo"
          onChangeText={setApodo}
        />
          </View>
          <View style={{
            backgroundColor: '#FFFFFF',
            width: '40%',
            height: '7%',
            borderRadius: 36,
            top: '51%',
            left: '31%',
            shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}>
            <TouchableNativeFeedback
             onPress={()=> 
              actualizarApodo()
              
            }
            /**() => navigation.navigate('Index') */
            >
                <Text style={{
                             color: '#2DDA93',
                             fontSize: 14,
                             fontWeight: 'bold',
                           marginHorizontal: '15%',
                           marginVertical: '10%'
                }}>
                    Establecer apodo
                </Text>
            </TouchableNativeFeedback>
        </View>

        </View>
       </Modal>


      <Text
        style={{
          fontSize: 24,
          color: '#000',
          fontWeight: 'bold',
          marginLeft: '20%',
          marginTop: '5%',
        }}>
        Correo electrónico
      </Text>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '70%',
          marginLeft: '18%',
          borderRadius: 100,
          paddingLeft: '5%',
          paddingTop: '2%',
          height: '6%',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {
            params.correo
          }
        </Text>
      </View>
      <Text
        style={{
          fontSize: 24,
          color: '#000',
          fontWeight: 'bold',
          marginLeft: '20%',
          marginTop: '10%',
        }}>
        Contraseña
      </Text>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '70%',
          marginLeft: '18%',
          borderRadius: 100,
          paddingLeft: '5%',
          paddingTop: '2%',
          height: '6%',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {
            params.password
          }
        </Text>
      </View>
    </View>
  );
};
function showAlert() {
  throw new Error('Function not implemented.');
}


import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableNativeFeedback, TextInput, Modal } from 'react-native';

interface Props extends StackScreenProps<any, any>{}

export const Sujeto3 = ({navigation}:Props) => {

  const [horacion, setHoracion] = useState('');
  const [respuestaCorrecta, setRespuestaCorrecta] = useState('');
  const [respuestaIncorrecta1, setRespuestaIncorrecta1] = useState('');
  const [respuestaIncorrecta2, setRespuestaIncorrecta2] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleInco, setIsVisibleInco] = useState(false);

  useEffect(() => {
    obtenerDatos();
  })
  

  const obtenerDatos = () =>{
    const datosUsuario: any[][] = [];

    fetch('https://nube-del-conocimiento.com/NubeFuncion/daSujeto/sujeto.php',{
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response)=> response.json())
    .then((respuestaJson) => {
      //console.log(respuestaJson);
      setHoracion(respuestaJson[2].pregunta);
      setRespuestaCorrecta(respuestaJson[2].respuesta);
      setRespuestaIncorrecta1(respuestaJson[2].respuestaIncorrecta1);
      setRespuestaIncorrecta2(respuestaJson[2].respuestaIncorrecta2);
     // console.log(horacion);
      //console.log(respuestaCorrecta);
      //console.log(respuestaIncorrecta1);
     // console.log(respuestaIncorrecta2);
    }).catch((error)=>{
      console.error(error);
    })
  }

  return (
    <View style={{
        flex: 1,
        backgroundColor: '#FFFF'
    }}>
        <View style={{
            backgroundColor: '#2DDA93',
            position: 'absolute',
            width: '80%',
            height: '45%',
            borderRadius: 180,
            top: -250,
            left: 50,

        }}>
            <Text style={{
                color: '#FFF',
                bottom: '-75%',
                left: '40%',
                fontWeight: 'bold',
                fontSize: 18
            }}>Sujeto</Text>
        </View>
      <Image
        style={{
          position: 'absolute',
          top: '30%',
          right: '-15%',
          height: '15%',
          width: '30%',
       
        }}
        source={require('../Act3/estrella.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-20%',
          height: '15%',
          width: '30%',
        }}
        source={require('../Act3/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-18%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '180deg'}],
        }}
        source={require('../Act3/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          top: '45%',
          left: '-15%',
          height: '15%',
          width: '30%',
        }}
        source={require('../Act3/triangulo.png')}
      />

      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '40%',
        color: '#2DDA93',
        paddingHorizontal: '18%',
      }}>
      {/*"La casa estaba terminada"*/}
      {horacion}
      </Text>
      
        <Text style={{
            borderRadius: 20,
            top: '8%',
            fontSize: 25,
            color: '#FFF',
            left: '1%',
            width: '90%',
            fontWeight: 'bold',
            backgroundColor: '#2DDA93',
            height: '15%',
            paddingVertical: 8,
            paddingHorizontal: 50,
            marginHorizontal: 20,
        }}>¿Cuál es el sujeto de la oración mostrada?</Text>

        <View style={{
            flexDirection: 'row',
            height: '10%',
            top: '25%',
        }}>
        <TouchableNativeFeedback
        onPress={() => setIsVisibleInco(true)}
        >
          <View
            style={{
              backgroundColor: '#D2ECFE',
              width: '25%',
              height: '50%',
              borderRadius: 40,
              paddingVertical: 5,
              left: '10%',
              bottom: '-5%',
              elevation: 8,
              marginLeft: 20,
              marginRight: 160,
              alignItems: 'center',
            }}>
            <Text
              style={{

                marginTop: '2%',
                color: '#000',
              }}>
              {
              //La casa
              respuestaIncorrecta2
              }
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => setIsVisibleInco(true)}
        >
          <View
            style={{
              backgroundColor: 'rgba(255,199,1,100)',
              width: '25%',
              height: '50%',
              borderRadius: 40,
              paddingVertical: 5,
              left: '10%',
              bottom: '-5%',
              elevation: 8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginTop: '2%',
                color: '#000',
              }}>
              {
                respuestaIncorrecta1
              }
            </Text>
          </View>
        </TouchableNativeFeedback>
        </View>
        <TouchableNativeFeedback
        onPress={() => setIsVisible(true)}
        >
          <View
            style={{
              backgroundColor: '#D8D67E',
              width: '25%',
              height: '5%',
              borderRadius: 40,
              paddingVertical: 5,
              left: '35%',
              bottom: '-20%',
              elevation: 8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginTop: '2%',
                color: '#000',
              }}>
              {
                respuestaCorrecta
              }
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Image 
        style={{
          left: '34%',
          bottom: '-26%',
        }}
        source={require('../Act3/Robot_sujeto.png')}
      />
     {/*Modal de esta correcto*/}
      <Modal
       animationType="fade"
       visible={isVisible}
       transparent={ true}
       >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center'
        }}>

          <View
        style={{
          position: 'absolute',
          backgroundColor: '#2DDA93',
          width: '32%',
          height: '22.5%',
          top: '35%',
          borderRadius: 200,
          marginHorizontal: '10%',
        }}>
          <Image 
          style={{
            width: '40%',     
            top:'-80%',
            left: '30%',
            resizeMode: 'contain'
          }}
          source={require('../Act3/correcto2.png')}/>
        
          </View>
          <View style={{
            backgroundColor: '#FFFFFF',
            width: '20%',
            height: '5.5%',
            borderRadius: 36,
            top: '55%',
            shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisible(false)
              navigation.navigate('Sujeto4')
             }
              
            }
            >
                <Text style={{
                             color: '#2DDA93',
                             fontSize: 14,
                             fontWeight: 'bold',
                           marginHorizontal: '15%',
                           marginVertical: '10%'
                }}>
                    Cerrar
                </Text>
            </TouchableNativeFeedback>
        </View>

        </View>
       </Modal>
       {/*Modal de esta incorrecto*/}
      <Modal
       animationType="fade"
       visible={isVisibleInco}
       transparent={ true}
       >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center'
        }}>

          <View
        style={{
          position: 'absolute',
          backgroundColor: '#2DDA93',
          width: '32%',
          height: '22.5%',
          top: '35%',
          borderRadius: 200,
          marginHorizontal: '10%',
        }}>
          <Image 
          style={{
            width: '40%',     
            top:'-105%',
            left: '30%',
            resizeMode: 'contain'
          }}
          source={require('../Act3/incorrecto1.png')}/>
        
          </View>
          <View style={{
            backgroundColor: '#FFFFFF',
            width: '20%',
            height: '5.5%',
            borderRadius: 36,
            top: '55%',
            shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(false)
              navigation.navigate('Sujeto4')
             }
              
            }
            >
                <Text style={{
                             color: '#2DDA93',
                             fontSize: 14,
                             fontWeight: 'bold',
                           marginHorizontal: '15%',
                           marginVertical: '10%'
                }}>
                    Cerrar
                </Text>
            </TouchableNativeFeedback>
        </View>

        </View>
       </Modal>
        </View>
  )
}

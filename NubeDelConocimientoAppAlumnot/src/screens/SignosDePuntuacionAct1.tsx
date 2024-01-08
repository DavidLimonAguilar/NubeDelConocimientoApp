import React from 'react';
import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const SignosDePuntuacionAct1 = ({navigation}:Props) => {
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
                left: '24%',
                fontWeight: 'bold',
                fontSize: 18
            }}>Signos de puntuación</Text>
        </View>
      <Image
        style={{
          position: 'absolute',
          top: '35%',
          right: '-20%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '90deg'}],
        }}
        source={require('../img/triangulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-15%',
          height: '15%',
          width: '30%',
        }}
        source={require('../img/triangulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-15%',
          height: '15%',
          width: '30%',
        }}
        source={require('../img/estrella.png')}
      />
      <Image
        style={{
          position: 'absolute',
          top: '45%',
          left: '-20%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '180deg'}],
        }}
        source={require('../img/estrella.png')}
      />
        <Text style={{
            borderRadius: 100,
            top: '20%',
            fontSize: 14,
            color: '#FFF',
            left: '1%',
            width: '90%',
            backgroundColor: '#2DDA93',
            height: '5%',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
        }}>Arrastra y suelta cada palabra junto a su definición</Text>

        <View style={{
            backgroundColor: '#2DDA93',
            borderRadius: 30,
            width: '80%',
            height: '37%',
            left: '10%',
            top: '23%'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:30,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Guion</Text>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Dos puntos</Text>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Paréntesis</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:30,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Coma</Text>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Signo de admiración</Text>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:25,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Punto y coma</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:10,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Puntos suspensivos</Text>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Comillas</Text>
                
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Punto</Text>
                
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text style={{
                    backgroundColor: '#FFF',
                    width: '25%',
                    marginVertical: 15,
                    marginHorizontal: 15,
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:10,
                    paddingVertical: 10,
                    fontSize: 10
                }}>Signos de pregunta</Text>                
            </View>
        </View>
  {/**PARTE DE LAS RESPUESTAS */}
        <View style={{
            paddingTop: 20,
            paddingHorizontal: 10,
            borderRadius: 20,
            width: '80%',
            left: '10%',
            top: '23%'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 7
            }}>
                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingRight: 7,
                    paddingVertical: 10,
                    fontSize: 10
                }}>''''</Text>

    <TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>

                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>,</Text>

<TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>

                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>.</Text>

<TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 7,
                
            }}>
                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingRight: 7,
                    paddingVertical: 10,
                    fontSize: 10
                }}>()</Text>

<TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>

                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>...</Text>

<TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>
        
                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    marginLeft: 15,
                    marginRight: 7,
                    paddingVertical: 10,
                    fontSize: 10
                }}>¿?</Text>

<TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingRight: 7,
                    paddingVertical: 10,
                    fontSize: 10
                }}>¡!</Text>

<TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>
            
                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:19,
                    paddingVertical: 10,
                    fontSize: 10
                }}>:</Text>

<TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>
                
                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:15,
                    paddingVertical: 10,
                    fontSize: 10
                }}>-</Text>
                <TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 7
            }}>
                <Text style={{
                    borderRadius: 20,
                    color: '#000',
                    paddingHorizontal:10,
                    paddingVertical: 10,
                    fontSize: 10
                }}>;</Text>   
                      <TouchableNativeFeedback
        onPress={() => console.log('xs')}
        >
          <View
            style={{
              backgroundColor: '#2DDA93',
              width: '23%',
              height: '100%',
              borderRadius: 40,
              marginVertical: '.2%',
            }}>
          </View>
        </TouchableNativeFeedback>       
            </View>
        </View>

<View
        style={{
          backgroundColor: '#2DDA93',
          width: '30%',
          paddingHorizontal:5,
          height: '4%',
          borderRadius: 36,
          bottom: '-26%',
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
          console.log('Enviando...')
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
            Enviar respuesta
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

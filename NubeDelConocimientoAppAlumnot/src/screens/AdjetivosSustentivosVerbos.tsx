import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Image, Modal, Text, TouchableNativeFeedback, View } from 'react-native';

interface Props extends StackScreenProps<any, any>{}

export const AdjetivosSustentivosVerbos = ({navigation}:Props) => {

    const [respuestaCorrecta, setRespuestaCorrecta] = useState('');
    const [respuestaCorrecta2, setRespuestaCorrecta2] = useState('');
    const [respuestaCorrecta3, setRespuestaCorrecta3] = useState('');
    const [respuestaCorrecta4, setRespuestaCorrecta4] = useState('');
    const [respuestaCorrecta5, setRespuestaCorrecta5] = useState('');
    const [respuestaCorrecta6, setRespuestaCorrecta6] = useState('');
    const [respuestaCorrecta7, setRespuestaCorrecta7] = useState('');
    const [respuestaCorrecta8, setRespuestaCorrecta8] = useState('');
    const [respuestaCorrecta9, setRespuestaCorrecta9] = useState('');
    const [imagen1, setImagen1] = useState('');
    const [imagen2, setImagen2] = useState('');
    const [imagen3, setImagen3] = useState('');
    const [imagen4, setImagen4] = useState('');
    const [imagen5, setImagen5] = useState('');
    const [imagen6, setImagen6] = useState('');
    const [imagen7, setImagen7] = useState('');
    const [imagen8, setImagen8] = useState('');
    const [imagen9, setImagen9] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleInco, setIsVisibleInco] = useState(false);
    const [pregunta1, setPregunta1] = useState(false);
    const [pregunta2, setPregunta2] = useState(false);
    const [pregunta3, setPregunta3] = useState(false);
    const [pregunta4, setPregunta4] = useState(false);
    const [pregunta5, setPregunta5] = useState(false);
    const [pregunta6, setPregunta6] = useState(false);
    const [pregunta7, setPregunta7] = useState(false);
    const [pregunta8, setPregunta8] = useState(false);
    const [pregunta9, setPregunta9] = useState(false);

    useEffect(() => {
    obtenerDatos();
  })
  

    const obtenerDatos = () =>{
        const datosUsuario: any[][] = [];
    
        fetch('https://nube-del-conocimiento.com/NubeFuncion/adSustantivos/adsustantivos.php',{
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((response)=> response.json())
        .then((respuestaJson) => {
            setRespuestaCorrecta(respuestaJson[0].dato);
            setRespuestaCorrecta2(respuestaJson[1].dato);
            setRespuestaCorrecta3(respuestaJson[2].dato);
            setRespuestaCorrecta4(respuestaJson[3].dato);
            setRespuestaCorrecta5(respuestaJson[4].dato);
            setRespuestaCorrecta6(respuestaJson[5].dato);
            setRespuestaCorrecta7(respuestaJson[6].dato);
            setRespuestaCorrecta8(respuestaJson[7].dato);
            setRespuestaCorrecta9(respuestaJson[8].dato);
            setImagen1(respuestaJson[0].imagen);
            setImagen2(respuestaJson[1].imagen);
            setImagen3(respuestaJson[2].imagen);
            setImagen4(respuestaJson[3].imagen);
            setImagen5(respuestaJson[4].imagen);
            setImagen6(respuestaJson[5].imagen);
            setImagen7(respuestaJson[6].imagen);
            setImagen8(respuestaJson[7].imagen);
            setImagen9(respuestaJson[8].imagen);
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
                left: '12%',
                fontWeight: 'bold',
                fontSize: 18
            }}>Adjetivos, sustantivos y verbos </Text>
        </View>
      <Image
        style={{
          position: 'absolute',
          top: '55%',
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
          bottom: '30%',
          left: '-20%',
          height: '15%',
          width: '30%',
        }}
        source={require('../img/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '-3%',
          left: '-10%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '215deg'}],
        }}
        source={require('../img/estrella.png')}
      />

        <Text style={{
            borderRadius: 100,
            top: '20%',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FFF',
            left: '1%',
            width: '90%',
            backgroundColor: '#2DDA93',
            height: '8%',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
        }}>Toca cada caja una por una para abrirlas y revelar el 
        elemento contenido dentro </Text>

        <View style={{
            backgroundColor: 'rgba(255,199,1,0.44)',
            borderRadius: 30,
            width: '80%',
            height: '28%',
            left: '10%',
            top: '23%',
            paddingVertical: 15,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                 <TouchableNativeFeedback
                    onPress={() => setPregunta1(true)}
                    >
                <View
                    style={{
                         backgroundColor: '#D2ECFE',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         elevation: 8,
                         marginHorizontal: 15,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => setPregunta2(true)}
                    >
                <View
                    style={{
                         backgroundColor: '#D2ECFE',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => setPregunta3(true)}
                    >
                <View
                    style={{
                         backgroundColor: '#D2ECFE',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                 <TouchableNativeFeedback
                    onPress={() => setPregunta4(true)}
                    >
                <View
                    style={{
                         backgroundColor: 'rgba(255,255,255,100)',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => setPregunta5(true)}
                    >
                <View
                    style={{
                        backgroundColor: 'rgba(255,255,255,100)',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => setPregunta6(true)}
                    >
                <View
                    style={{
                        backgroundColor: 'rgba(255,255,255,100)',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                
            </View>
            
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                 <TouchableNativeFeedback
                    onPress={() => setPregunta7(true)}
                    >
                <View
                    style={{
                         backgroundColor: '#D8D67E',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => setPregunta8(true)}
                    >
                <View
                    style={{
                         backgroundColor: '#D8D67E',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => setPregunta9(true)}
                    >
                <View
                    style={{
                         backgroundColor: '#D8D67E',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                
            </View>
        </View>
        <Image style={{
            width: '30%',
            height: '30%',
            resizeMode: 'contain',
            right: '-41%',
            bottom: '-22%'
        }}
        source={require('../img/crayon.png')}
        />
        <Image style={{
            width: '30%',
            height: '30%',
            resizeMode: 'contain',
            right: '-71%',
            bottom: '-12%'
        }}
        source={require('../img/android.png')}
        />
        
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
          source={require('../screens/Act3/incorrecto1.png')}/>
        
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
              setPregunta1(false)
              setPregunta2(false)
              setPregunta3(false)
              setPregunta4(false)
              setPregunta5(false)
              setPregunta6(false)
              setPregunta7(false)
              setPregunta8(false)
              setPregunta9(false)
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
          source={require('../screens/Act3/correcto2.png')}/>
        
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
              setPregunta1(false)
              setPregunta2(false)
              setPregunta3(false)
              setPregunta4(false)
              setPregunta5(false)
              setPregunta6(false)
              setPregunta7(false)
              setPregunta8(false)
              setPregunta9(false)
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
    {/* Primera actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta1}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       {/*<Image source={{uri: 'https://i.pinimg.com/originals/66/8e/b9/668eb92d78d81bd1010a8de961320bf2.jpg'}}
       style={{width: 400, height: 400}} />
        <Image 
          style={{
            //width: '40%',     
            //top:'-80%',
            //left: '30%',
            //resizeMode: 'contain'
          }}
          source={{uri: 'https://i.pinimg.com/originals/66/8e/b9/668eb92d78d81bd1010a8de961320bf2.jpg'}}/>
       
       */}
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen1}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisible(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisibleInco(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Segunda actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta5}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen2}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta2}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisible(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisibleInco(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Tercera actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta9}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen3}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta3}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisible(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisibleInco(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Cuarta actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta2}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen4}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta4}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisible(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisibleInco(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Quinta actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta8}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen5}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta5}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisible(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisibleInco(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Sexta actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta4}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen6}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta6}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisible(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisibleInco(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Septima actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta3}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen7}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta7}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisible(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Octava actividad*/}
    <Modal
       animationType="fade"
       visible={pregunta6}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen8}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta8}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisible(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    {/* Novena actividad*/} 
    <Modal
       animationType="fade"
       visible={pregunta7}
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
          width: '80%',
          height: '80%',
          top: '10%',
          borderRadius: 20,
          marginHorizontal: '10%',
          alignItems: 'center',
        }}>
       <Text  style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '5%',
        fontSize: 24,
       }}>
            Selecciona lo que es la palabra 
       </Text>
        <Image source={{uri: imagen9}}
            style={{
                width: '50%',
                height: '30%',
                marginTop:'5%',
                borderRadius: 20,
                }} />
            <Text  style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: '5%',
                fontSize: 24,
            }}>
            {respuestaCorrecta9}
       </Text>
       <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Adjetivo
                </Text>
            </TouchableNativeFeedback>
        </View>

        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
          marginBottom: '5%'
        }}>
            <TouchableNativeFeedback
             onPress={()=> {
              setIsVisibleInco(true)
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
                    Sustantivo
                </Text>
            </TouchableNativeFeedback>
        </View>


        <View style={{
            backgroundColor: '#FFFFFF',
            width: '36%',
            height: '7.5%',
            borderRadius: 36,
            top: '7%',
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
              setIsVisible(true)
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
                    Verbo
                </Text>
            </TouchableNativeFeedback>
        </View>
          </View>
          

        </View>
       </Modal>
    </View>
  )
}

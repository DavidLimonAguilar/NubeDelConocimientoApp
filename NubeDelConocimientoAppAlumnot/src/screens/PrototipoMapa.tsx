import React from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const PrototipoMapa = ({navigation}:Props) => {

  return (
    <View style={{
        flex: 1,
        backgroundColor: '#4CD7E0'
    }}>
        {/*Cieculo izquierda superior */}
        <View style={{
            backgroundColor: 'rgba(255, 255, 255,0.15)',
            width: 179,
            height: 178,
            borderRadius: 100,
            left: -40,
            top: -40
        }}
        >
        </View>

        {/*Cieculo derecha superior */}
        <View style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255,0.15)',
            width: 300,
            height: 300,
            borderRadius: 140,
            right: "-30%",
            top: 1,
        }}
        >
        </View>
        {/*Cieculo izquierdo inferior */}
        <View style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255,0.15)',
            width: 300,
            height: 300,
            borderRadius: 140,
            left: "-30%",
            bottom: 120,
        }}
        >
        </View>
        {/*Cieculo derecho inferior */}
        <View style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255,0.15)',
            width: 179,
            height: 179,
            borderRadius: 140,
            right: "-20%",
            bottom: 175,
        }}
        >
        </View>
        {/*Cieculo central inferior */}
        <View style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255,0.15)',
            width: 179,
            height: 179,
            borderRadius: 140,
            right: "25%",
            bottom: -80,
        }}
        >
        </View>
        <Image style={{
            right: "-40%",
            bottom: "-60%",
            height: 20,
        }}
        source={require('../img/piso.png')}
        />
        <Image style={{
            right: "-20%",
            bottom: "-47.2%",
            height: 20,
            transform: [{rotate: '90deg'}],
        }}
        source={require('../img/piso.png')}
        />
        <Image style={{
            right: "-40%",
            bottom: "-34.5%",
            height: 20,
        }}
        source={require('../img/piso.png')}
        />
        <Image style={{
            right: "-57.8%",
            bottom: "-19.4%",
            height: 20,
            transform: [{rotate: '90deg'}],
        }}
        source={require('../img/piso.png')}
        />
        <Image style={{
            right: "-39.9%",
            bottom: "-4.5%",
            height: 20,
        }}
        source={require('../img/piso.png')}
        />
        <Image style={{
            right: "-20%",
            top: "-8.3%",
            height: 20,
            transform: [{rotate: '90deg'}],
        }}
        source={require('../img/piso.png')}
        />
        <Image style={{
            right: "-39.9%",
            top: "-21%",
            height: 20,
        }}
        source={require('../img/piso.png')}
        />
        <Image
        style={{
          position: 'absolute',
          bottom: '14.5%',
          left: '31%',
        }}
        source={require('../img/perro1.png')}
      />
     <TouchableNativeFeedback
        onPress={() => navigation.navigate('SignosDePuntuacionAct1')}
        >
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#FFF',
              width: '20%',
              height: '5%',
              borderRadius: 40,
              paddingVertical: 5,
              paddingHorizontal:5,
              left: '31%',
              bottom: '15%',
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#2DDA93',
              }}>
              LVL 1
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Image
        style={{
          position: 'absolute',
          bottom: '40%',
          left: '65%',
        }}
        source={require('../img/perro2.png')}
      />
        <TouchableNativeFeedback
        onPress={() => navigation.navigate('AdjetivosSustentivosVerbos')}
        >
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#FFF',
              width: '20%',
              height: '5%',
              borderRadius: 40,
              paddingVertical: 5,
              paddingHorizontal:5,
              left: '68%',
              bottom: '35.5%',
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#2DDA93',
              }}>
              LVL 2
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Image
        style={{
          position: 'absolute',
          bottom: '45%',
          left: '27%',
        }}
        source={require('../img/perro3.png')}
      />
        <TouchableNativeFeedback
        onPress={() => navigation.navigate('Sujeto1')}
        >
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#FFF',
              width: '20%',
              height: '5%',
              borderRadius: 40,
              paddingVertical: 5,
              paddingHorizontal:5,
              left: '31%',
              bottom: '60.5%',
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#2DDA93',
              }}>
              LVL 3
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Image
        style={{
          position: 'absolute',
          top: '1.2%',
          left: '70%',
        }}
        source={require('../img/perro4.png')}
      />
        <TouchableNativeFeedback
        //onPress={() => navigation.navigate('AdjetivosSustentivosVerbos')}
        >
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#FFF',
              width: '20%',
              height: '5%',
              borderRadius: 40,
              paddingVertical: 5,
              paddingHorizontal:5,
              left: '68%',
              top: '13.5%',
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#2DDA93',
              }}>
              LVL 4
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Image style={{
            width: '20%', 
            right: '-60%',    
            resizeMode: 'contain'
        }}
        source={require('../img/carro2.png')}
        />    
      
    </View>
  )
}

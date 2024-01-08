import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableNativeFeedback, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props extends StackScreenProps<any, any>{}

export const Login = ({navigation}:Props) => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const showAlert = () =>{
    Alert.alert(
      "Error",
      "Usuario o contraseña incorrecto",
      [
        {
          text: "OK", onPress: () => console.log("Ok Pressed")
        }
      ]
    )
  }

  const verificar = () =>{
    //console.log(correo);
    //console.log(password);
    const datosUsuario: any[][] = [];

    fetch('http://nube-del-conocimiento.com/NubeFuncion/loginAlumno/loginProceso.php  ',{
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: correo,
        password: password
      })
    }).then((response)=> response.json())
    .then((respuestaJson) => {
      //console.log(respuestaJson[1].numeroControl)
      /*for(let i in respuestaJson){
        datosUsuario.push([i,respuestaJson[i]])
      }*/
      if(respuestaJson[0].usuario === 'Encontrado'){
        navigation.navigate('Index',{
          numControl: respuestaJson[1].numeroControl,
          correo: respuestaJson[1].correo,
          nombre: respuestaJson[1].nombre,
          password: respuestaJson[1].password,
          aPaterno: respuestaJson[1].aPaterno,
          aMaterno: respuestaJson[1].aMaterno,
          apodo: respuestaJson[2][0].apodo
        });
      }else if(respuestaJson.usuario === 'No encontrado'){
        /*datosUsuario.forEach(function(elemento,indice,datosUsuario){
          console.log(elemento,indice)
        })*/
        showAlert();
      }
    }).catch((error)=>{
      showAlert();
    })
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '100%',
          height: '60%',
          borderRadius: 1000,
          top: -350,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            color: '#FFF',
            top: '75%',
            left: '42%',
          }}>
          Hola
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            position: 'absolute',
            color: '#FFF',
            top: '85%',
            left: '26%',
          }}>
          Aumentamos tú conocimiento
        </Text>
      </View>
      <Image
        style={{
          left: '38%',
          bottom: '37%',
        }}
        source={require('../img/Body.png')}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#2DDA93',
          width: '80%',
          height: '40%',
          top: '35%',
          borderRadius: 50,
          marginHorizontal: '10%',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 'bold',
            left: '30%',
            top: '10%',
          }}>
          Correo electronico
        </Text>
        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            width: '80%',
            marginHorizontal: '10%',
            top: '15%',
            borderRadius: 10,
          }}
          placeholder="Correo@gmail.com"
          onChangeText={setCorreo}
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 'bold',
            left: '40%',
            top: '25%',
          }}>
          Password
        </Text>

        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            width: '80%',
            marginHorizontal: '10%',
            top: '30%',
            borderRadius: 10,
          }}
          placeholder="Contraseña!"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <View style={{
            backgroundColor: '#FFFFFF',
            width: '40%',
            height: '15%',
            borderRadius: 36,
            top: '45%',
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
            onPress={()=> verificar()}
            /**() => navigation.navigate('Index') */
            >
                <Text style={{
                             color: '#2DDA93',
                             fontSize: 14,
                             fontWeight: 'bold',
                           marginHorizontal: '15%',
                           marginVertical: '10%'
                }}>
                    Iniciar Sesión
                </Text>
            </TouchableNativeFeedback>
        </View>
      </View>
      <Image
        style={{
          width: '100%',
          height: '10%',
          position: 'absolute',
          top: '92.5%',
        }}
        source={require('../img/Pasto2.png')}
      />
    </View>
  );
};

export default Login;
function alert(respuestaJson: any) {
  throw new Error('Function not implemented.');
}


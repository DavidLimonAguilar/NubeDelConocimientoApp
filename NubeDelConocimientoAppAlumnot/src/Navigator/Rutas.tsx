import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../screens/Inicial';
import Login  from '../screens/Login';
import {Index} from '../screens/Index';
import { PerfilAlumno } from '../screens/PerfilAlumno';
import { PrototipoMapa } from '../screens/PrototipoMapa';
import { SignosDePuntuacionAct1 } from '../screens/SignosDePuntuacionAct1';
import { AdjetivosSustentivosVerbos } from '../screens/AdjetivosSustentivosVerbos';
import { Sujeto1 } from '../screens/Act3/Sujeto1';
import { Sujeto2 } from '../screens/Act3/Sujeto2';
import { Sujeto3 } from '../screens/Act3/Sujeto3';
import { Sujeto4 } from '../screens/Act3/Sujeto4';
import { Sujeto5 } from '../screens/Act3/Sujeto5';
import { Sujeto6 } from '../screens/Act3/Sujeto6';
import { Sujeto7 } from '../screens/Act3/Sujeto7';
import { Sujeto8 } from '../screens/Act3/Sujeto8';
import { Sujeto9 } from '../screens/Act3/Sujeto9';
import { Sujeto10 } from '../screens/Act3/Sujeto10';



export type RootStackParams = {
  Inicial: undefined,
  Login: undefined,
  Index: {numControl: string,correo: string, nombre: string, password: string, aPaterno: string, aMaterno: string, apodo: string},
  PerfilAlumno: {numControl: string, correo: string, nombre: string, password: string, aPaterno: string, aMaterno: string, apodo: string},
  Mapa: undefined,
  SignosDePuntuacionAct1: undefined,
  AdjetivosSustentivosVerbos: undefined,
  Sujeto1: undefined,
  Sujeto2: undefined,
  Sujeto3: undefined,
  Sujeto4: undefined,
  Sujeto5: undefined,
  Sujeto6: undefined,
  Sujeto7: undefined,
  Sujeto8: undefined,
  Sujeto9: undefined,
  Sujeto10: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const Rutas = () => {
  return (
    <Stack.Navigator
     screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white'
        }
     }}
    >
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="PerfilAlumno" component={PerfilAlumno} />
      <Stack.Screen name="Mapa" component={PrototipoMapa} />
      <Stack.Screen name="SignosDePuntuacionAct1" component={SignosDePuntuacionAct1} />
      <Stack.Screen name="AdjetivosSustentivosVerbos" component={AdjetivosSustentivosVerbos} />
      <Stack.Screen name="Sujeto1" component={Sujeto1} />
      <Stack.Screen name="Sujeto2" component={Sujeto2} />
      <Stack.Screen name="Sujeto3" component={Sujeto3} />
      <Stack.Screen name="Sujeto4" component={Sujeto4} />
      <Stack.Screen name="Sujeto5" component={Sujeto5} />
      <Stack.Screen name="Sujeto6" component={Sujeto6} />
      <Stack.Screen name="Sujeto7" component={Sujeto7} />
      <Stack.Screen name="Sujeto8" component={Sujeto8} />
      <Stack.Screen name="Sujeto9" component={Sujeto9} />
      <Stack.Screen name="Sujeto10" component={Sujeto10} />
    </Stack.Navigator>
  );
}
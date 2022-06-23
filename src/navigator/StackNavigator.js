
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HolaMundo from '../HolaMundo';
import Galeria from '../Galeria';
import Imagenes from '../Imagenes';
import InfoPersona from '../InfoPersona';
import Formulario from '../Formulario';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Holamundo" component={ HolaMundo } />
        <Stack.Screen name="Galeria" component={ Galeria } />
        <Stack.Screen name="Llamadawhatsapp" component={ Imagenes } />
        <Stack.Screen name="InfoPersona" component={ InfoPersona } />
        <Stack.Screen name="Formulario" component={ Formulario } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

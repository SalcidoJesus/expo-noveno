
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HolaMundo from '../HolaMundo';
import Galeria from '../Galeria';
import Imagenes from '../Imagenes';
import InfoPersona from '../InfoPersona';
import Formulario from '../Formulario';
import Estado from '../Estado';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'tomato'
        },
        headerTitleStyle: {
          color: 'white',
          // fontWeight: 'bold'
        }
      }}>
        <Stack.Screen options={{
          title: 'inicio'
        }} name="Holamundo" component={ HolaMundo } />
        <Stack.Screen name="Galeria" component={ Galeria } />
        <Stack.Screen name="Llamadawhatsapp" component={ Imagenes } />
        <Stack.Screen name="InfoPersona" component={ InfoPersona } />
        <Stack.Screen name="Formulario" component={ Formulario } />
        <Stack.Screen name="Estado" component={ Estado } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

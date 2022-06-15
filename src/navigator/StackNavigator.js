
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HolaMundo from '../HolaMundo';
import Galeria from '../Galeria';
import Imagenes from '../Imagenes';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="holamundo" component={ HolaMundo } />
        <Stack.Screen name="galeria" component={ Galeria } />
        <Stack.Screen name="llamadawhatsapp" component={ Imagenes } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

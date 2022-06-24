import react from "react"

import { Text, View, Button } from "react-native";

export default function HolaMundo( { navigation } ) {
  
  return(
    <View style={{
      justifyContent:"space-evenly",
      alignItems:"center",
      backgroundColor: "purple",
      flex: 1
    }}>
      <Text style={{
       
        color:"white", fontSize:20
      }}>Hola buenos dias</Text>

      <Button title="ir a galería" color="tomato" onPress={ () => navigation.push('Galeria') } />
      <Button title="Juan Carlos :D" color="tomato" onPress={ () => navigation.push('InfoPersona', {
        nombre: 'Juan Carlos',
        bebida: 'Tonicol'
      }) } />
      <Button title="Jesús :D" color="tomato" onPress={ () => navigation.push('InfoPersona', {
        nombre: 'Jesús',
        bebida: 'Tejuino'
      }) } />

      <Button title="estado" onPress={ () => navigation.push('Estado') }/>

      <Button title="formulario" onPress={ () => navigation.push('Formulario') }/>

      
    </View>

  )
  
}


import * as React from 'react'
import { useState } from 'react';

import { Text, TextInput, ScrollView, StyleSheet, Button } from "react-native";

export default function Formulario({ navigation }) {

    // creé una variable de estado para guardar el nombre
    const [ nombre, setNombre ] = useState( "" )
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")

    function traerDatos() {

        // aquí imprimo las variables de estado
        console.log("contenido de la variable nombre", nombre);
        console.log("contenido de la variable correo", correo);
        console.log("contenido de la variable telefono", telefono);

        var datos = new FormData()
        // lo de naranja es el nombre con el que recibiré el dato
        // lo azul es el nombre de la variable o el valor a enviar
        datos.append( "nombre", nombre )
        datos.append( "correo", correo )
        datos.append( "telefono", telefono )
        
        // aquí mandamos la información
        fetch( 'http://10.5.1.80/react-native-php/datos.php', {
            method: 'post',
            body: datos
        })
        // aquí la convertimos a json
        .then( res => res.json() )
        // aquí la leemos
        .then( function( resultado ) {
            console.log( resultado );

            if ( resultado.acceso == true ) {
                navigation.push('Galeria')
            } else {
                alert("usuario no encontrado")
            }

        })
        

    }

    
    
    return (
        <ScrollView>

            <TextInput
                placeholder = 'soy un input'
                style = { estilos.input }
                autoCapitalize = 'words'
                autoCorrect = { true }
                autoFocus = { true }
                editable = { true }
                maxLength = { 100 }
                multiline = { true }
                secureTextEntry = { true }
                onChangeText = { setNombre }/>
                {/* aquí asigno el valor a la variable de estado */}

            <TextInput
                placeholder = 'escribe tu correo :D'
                placeholderTextColor='purple'
                style = { estilos.input }
                keyboardType = 'email-address'
                onChangeText = { setCorreo }/>

            <TextInput
                placeholder = 'escribe tu teléfono :D'
                style = { estilos.input }
                keyboardType = 'phone-pad'
                contextMenuHidden = { true }
                textAlign = 'center'
                onChangeText = { setTelefono }/>

            <Button title="traer datos" onPress={ traerDatos }/>
                
        </ScrollView>
    )

}

const estilos = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 10
    }
})


import * as React from 'react'

import { Text, TextInput, View, StyleSheet } from "react-native";

export default function Formulario() {
    
    return (
        <View>

            <TextInput
                placeholder = 'soy un input'
                style = { estilos.input }
                autoCapitalize = 'words'
                autoCorrect = { true }
                autoFocus = { true }
                editable = { true }
                maxLength = { 100 }
                multiline = { true }/>

            <TextInput
                placeholder = 'escribe tu correo :D'
                placeholderTextColor='purple'
                style = { estilos.input }
                keyboardType = 'email-address'/>

            <TextInput
                placeholder = 'escribe tu teléfono :D'
                style = { estilos.input }
                keyboardType = 'phone-pad'
                contextMenuHidden = { true }
                textAlign = 'center'/>
                
        </View>
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

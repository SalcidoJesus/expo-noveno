

import { useState, useEffect } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function Estado() {
    // aquí pueden poner todo el javascript que quiera :D
    // de aquí


    // aquí creamos variables de estado, sirven para actualizar la interfaz
    // la variable "numero" contiene el valor
    // la función "setNumero" sirve para actualiar el valor
    // el 0 es el valor inicial
    const [ numero, setNumero ] = useState( 0 )

    useEffect( () => {
        // esto se ejecutará cuando cambie lo que está dentro de los corchetes
        // pueden poner todo el js que quieran
        console.log("la variable número cambió, ahora vale", numero);

        if ( numero > 4 ) {
            Alert.alert( "he tranquilo", "son muchas pizzas D:" )
        }

    }, [ numero ] )

    // hasta acá
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
            <Text style={{ fontSize: 40 }}>
                Pediste { numero } pizzas
            </Text>
            <Button title="sumar 1" onPress={ () => setNumero( numero + 1 ) } />
            <Button title="reiniciar" onPress={ () => setNumero( 0 ) } />
        </View>
    )

}

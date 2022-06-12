
import { View, StyleSheet } from "react-native";

export default function Cajas() {

    return (
        <View style={ estilos.contenedor }>

            <View style={ estilos.caja1 }/>

            <View style={ estilos.caja2 }/>

            <View style={ estilos.caja3 }/>

        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor: {
        backgroundColor: 'purple',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    caja1: {
        backgroundColor: 'green',
        width: 100,
        height: 100
    },
    caja2: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        right: -100
    },
    caja3: {
        backgroundColor: 'yellow',
        width: 100,
        height: 100
    }
})

import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';

export default function Pelicula({ titulo, descripcion, imagen, url }) {


    var pelicula_imagen = {
        'beastars.jpg': require('./img/beastars.jpg'),
        'endgame.jpg': require('./img/endgame.jpg'),
        'joker.jpg': require('./img/joker.jpg'),
        'logan.jpg': require('./img/logan.jpg'),
        'snk.png': require('./img/snk.png'),
    }

    var url_imagen = pelicula_imagen[ imagen ]

    return (
        <>
            <TouchableOpacity onPress={ () => Linking.openURL( url ) } activeOpacity={ .6 } style={ estilos.contenedor }>
                <Image source={ url_imagen } style={ estilos.imagen } />
                <View style={ estilos.textos }>
                    <Text style={ estilos.titulo }> { titulo } </Text>
                    <Text> { descripcion } </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    imagen: {
        width: 140,
        height: 190,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    titulo: {
        fontSize: 20,
        marginBottom: 10
    },
    contenedor: {
        maxHeight: 200,
        margin: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    textos: {
        margin: 10,
        flex: 1
    }
})

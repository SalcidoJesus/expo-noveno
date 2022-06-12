
import { Text, ImageBackground, Image, View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Imagenes() {

    var imagen_fondo = require('./img/fondo.jpg')
    var imagen = require('./img/gatoperro2.jpg')

    return(
        <ImageBackground source={ imagen_fondo } style={{ flex: 1 }}>
            
            <View style={ estilos.info }>
                <Image source={ imagen } style={{ width: 200, height: 200, borderRadius: 100 }}/>
                <Text style={ estilos.texto }>Persona :D</Text>
                <Text style={ estilos.texto }>Ringing</Text>
            </View>

            {/* este view es toda la caja esa gris de abajo :D */}
            <View style={ estilos.caja_gris }>
                <View style={{ alignItems: 'center' }}>
                    <AntDesign name="up" size={ 30 } color="white" />
                </View>

                <View style={ estilos.iconos }>
                    <MaterialCommunityIcons name="dog" size={24} color="black" />
                    <MaterialCommunityIcons name="dog" size={24} color="black" />
                    <MaterialCommunityIcons name="dog" size={24} color="black" />
                    <MaterialCommunityIcons name="dog" size={24} color="black" />
                </View>
            </View>

        </ImageBackground>
    )

}

const estilos = StyleSheet.create({
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    texto: {
        fontSize: 40,
        color: 'white'
    },
    caja_gris: {
        backgroundColor: 'grey',
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
    },
    iconos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})

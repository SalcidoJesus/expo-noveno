
import React from 'react'
import { View, Text } from 'react-native'

const InfoPersona = ({ route, navigation }) => {

    const { nombre, bebida } = route.params
    navigation.setOptions({ title: nombre })

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text> { nombre } </Text>
            <Text> { bebida } </Text>
        </View>
    )
}

export default InfoPersona


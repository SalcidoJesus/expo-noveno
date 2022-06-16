
import React from 'react'
import { View, Text } from 'react-native'

const InfoPersona = ({ route }) => {

    const { nombre, bebida } = route.params

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


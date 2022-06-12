import react from "react"

import { Text, View } from "react-native";

export default function HolaMundo() {
  
  return(
    <View style={{
      justifyContent:"center",
alignItems:"center",
      backgroundColor: "purple",
      flex: 1
    }}>
      <Text style={{
       
        color:"white", fontSize:100
      }}>Hola buenos dias</Text>
      
    </View>

  )
  
}

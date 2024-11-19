import React, {useEffect} from 'react'
import { View, Text} from 'react-native'
import Input from "./input"
import Button from "./button"
import useForm from "../hooks/useSendForm"


export default function formComponent(){
    
  const {submit ,handleSubmit} = useForm()

  return (
    <View style={{alignItems: 'center', backgroundColor: "#dfdfdf", paddingHorizontal: 30, paddingVertical: 70, borderRadius: 20, opacity: 0.9}}>
      <Text style={{fontSize: 30, fontWeight: "bold", marginBottom: 20}}>INGRESAR</Text>
        <Input placeholder="Usuario" tipo="email" onChangeText={(e)=>{handleSubmit("email", e)}}/>
        <Input placeholder="Contraseña" tipo="password" onChangeText={(e)=>{handleSubmit("password", e)}}/>
        <Button onPress={()=>{submit()}}/>
    </View>
  )
}

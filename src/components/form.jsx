import React, {useEffect} from 'react'
import { View, Text} from 'react-native'
import Input from "./input"
import Button from "./button"
import useForm from "../hooks/useSendForm"
import Styles from "../Styles/styles"


export default function formComponent(){
    const {form} = Styles()
  const {submit ,handleSubmit} = useForm()

  return (
    <View style={form}>
      <Text style={{fontSize: 30, fontWeight: "bold", marginBottom: 20}}>INGRESAR</Text>
        <Input placeholder="Usuario" tipo="email" onChangeText={(e)=>{handleSubmit("email", e)}}/>
        <Input placeholder="Contraseña" tipo="password" onChangeText={(e)=>{handleSubmit("password", e)}}/>
        <Button onPress={()=>{submit()}}/>
    </View>
  )
}

import React, {useEffect} from 'react'
import { View, Text} from 'react-native'
import Input from "./input"
import Button from "./button"
import useForm from "../hooks/useSendForm"


export default function formComponent(){
    
  const {submit ,handleSubmit} = useForm()

  return (
    <View style={{alignItems: 'center'}}>
      <Text>INGRESAR</Text>
        <Input tipo="email" onChangeText={(e)=>{handleSubmit("email", e)}}/>
        <Input tipo="password" onChangeText={(e)=>{handleSubmit("password", e)}}/>
        <Button onPress={()=>{submit()}}/>
    </View>
  )
}

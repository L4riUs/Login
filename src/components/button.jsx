import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../Styles/styles'

export default function button({onPress}) {
    const {button,text} = Styles()

  return (
    <View>
        <TouchableOpacity 
        style={button}
        onPress={() => onPress()}
        >
            <Text style={text}>INGRESAR</Text>
        </TouchableOpacity>
    </View>
  )
}



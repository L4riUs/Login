import React,{useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View,Text } from 'react-native';
import Form from './src/components/form';

export default function App() {
  return (
    <>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Form />
      </View>
      <StatusBar style="dark" />
    </>
  );
}

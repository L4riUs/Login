import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import Form from './src/components/form';

export default function App() {


  return (
    <>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#004c6d"}}>
        <Form />
      </View>
      <StatusBar style="dark" />
    </>
  );
}

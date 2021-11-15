import React from "react";
import { View, Text} from 'react-native'
import { Header } from "../../components/Header";
import { style } from "./style";


export const Home = () => {
  
  return (
    <View style={style.container}>
      <Header/>
    </View>
  )
}
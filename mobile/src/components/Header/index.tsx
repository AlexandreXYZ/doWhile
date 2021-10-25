import React from "react";
import { style } from "./style";
import { View, Text } from 'react-native';
import LogoSvg from '../../assets/logo.svg';

export const Header = () => {
  return(
    <View style={style.container}>
      <LogoSvg/>
      <Text style={style.logoutText}>Sair</Text>
    </View>
  );
}
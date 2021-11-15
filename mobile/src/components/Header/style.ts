import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logoutText: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE
  }
})
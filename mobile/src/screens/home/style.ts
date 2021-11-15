import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 16,
  }
})
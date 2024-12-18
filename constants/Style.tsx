import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerContrainer: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textLogo: {
    fontSize: 16,
    fontFamily: "MontserratBold",
  },
  textCopyright: {
    fontSize: 12,
    fontFamily: "MontserratRegular",
  },
  topHalfKeyboardHidden: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 20,
  },
  topHalfKeyboardShown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomHalf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    padding: 30,
    gap: 10,
    width: "100%",
  },
  input: {
    fontFamily: "MontserratRegular",
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  button: {
    height: 40,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "MontserratBold",
    textAlign: "center",
  },
  heading: {
    fontFamily: "MontserratBold",
    fontSize: 24,
    letterSpacing: -1,
  },
  paragraph: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "justify",
  },
  logoutText: {
    fontFamily: "MontserratMedium",
  },
});

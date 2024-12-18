import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SmallLogo from "@/assets/SmallLogo";
import Background from "@/components/Background";
import Android from "@/constants/Android";
import Style from "@/constants/Style";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import Button from "@/components/ui/Button";
import { useCollapseLogo } from "@/hooks/useCollapseLogo";
import Animated from "react-native-reanimated";
import { useThemeColor } from "@/hooks/useThemeColor";

const SignupScreen = () => {
  const { logoOpacity, logoVisible } = useCollapseLogo();
  const buttonBgColor = useThemeColor({}, "buttonBgColor");

  return (
    <>
      <Background></Background>
      <SafeAreaView style={Android.androidSafeArea}>
        <View style={Style.topHalfKeyboardHidden}>
          <Animated.View style={{ opacity: logoOpacity }}>
            {logoVisible ? <SmallLogo></SmallLogo> : null}
          </Animated.View>
          <Text style={Style.heading}>Let's create an account</Text>
        </View>
        <View
          style={{
            ...Style.bottomHalf,
          }}
        >
          <View style={Style.textContainer}>
            <TextInput
              style={Style.input}
              placeholder="Email or username"
              inputMode="email"
              autoCapitalize="none"
            ></TextInput>
            <TextInput
              style={Style.input}
              placeholder="Password"
              inputMode="text"
              secureTextEntry={true}
            ></TextInput>
            <TextInput
              style={Style.input}
              placeholder="Re-enter password"
              inputMode="text"
              secureTextEntry={true}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            ...Style.bottomHalf,
          }}
        >
          <View style={Style.textContainer}>
            <Button variant="filled" style={{ backgroundColor: buttonBgColor }}>
              Register
            </Button>
            <TouchableOpacity
              onPress={() => router.navigate("/sign-in")}
              style={{ alignItems: "center" }}
            >
              <Text
                style={{
                  fontFamily: "MontserratMedium",
                  marginTop: 10,
                }}
              >
                Already have an account ?{" "}
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                  }}
                >
                  Sign in
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;

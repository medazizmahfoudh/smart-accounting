import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Background from "@/components/Background";
import Android from "@/constants/Android";
import Animated from "react-native-reanimated";
import { Formik } from "formik";
import SmallLogo from "@/assets/SmallLogo";
import { useCollapseLogo } from "@/hooks/useCollapseLogo";
import Style from "@/constants/Style";
import { router } from "expo-router";
import Button from "@/components/ui/Button";
import { useSession } from "@/context/AuthContext";
import { useThemeColor } from "@/hooks/useThemeColor";

const SigninScreen = () => {
  const { logoOpacity, logoVisible } = useCollapseLogo();
  const buttonBgColor = useThemeColor({}, "buttonBgColor");
  const { signIn, session } = useSession();

  return (
    <>
      <Background></Background>
      <SafeAreaView style={Android.androidSafeArea}>
        <View style={Style.topHalfKeyboardHidden}>
          <Animated.View style={{ opacity: logoOpacity }}>
            {logoVisible ? <SmallLogo></SmallLogo> : null}
          </Animated.View>

          <Text style={Style.heading}>Welcome back!</Text>
        </View>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.warn("Session" + session);
            signIn(values.username, values.password);
            console.warn("Session" + session);
            router.navigate("/");
            console.log("Yey");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <>
              <View
                style={{
                  ...Style.bottomHalf,
                }}
              >
                <View style={Style.textContainer}>
                  <TextInput
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    style={Style.input}
                    placeholder="Email or username"
                    inputMode="email"
                    autoCapitalize="none"
                  ></TextInput>
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    style={Style.input}
                    placeholder="Password"
                    inputMode="text"
                    secureTextEntry={true}
                    autoCapitalize="none"
                  ></TextInput>
                  <TouchableOpacity style={{ alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontFamily: "MontserratMedium",
                        marginTop: 10,
                      }}
                    >
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  ...Style.bottomHalf,
                }}
              >
                <View style={Style.textContainer}>
                  <Button
                    isLoading={isSubmitting}
                    onPress={handleSubmit}
                    style={{ backgroundColor: buttonBgColor }}
                  >
                    Sign in
                  </Button>
                  <TouchableOpacity
                    onPress={() => router.navigate("/sign-up")}
                    style={{ alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontFamily: "MontserratMedium",
                        marginTop: 10,
                      }}
                    >
                      Don't have an account?{" "}
                      <Text
                        style={{
                          fontFamily: "MontserratBold",
                        }}
                      >
                        Register Now
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </>
  );
};

export default SigninScreen;

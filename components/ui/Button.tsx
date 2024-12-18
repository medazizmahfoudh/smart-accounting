import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  Pressable,
  PressableProps,
} from "react-native";

import React from "react";
import { Colors } from "@/constants/Colors";

type ButtonProps = TouchableOpacityProps & {
  variant: "filled" | "outlined";
  isLoading?: boolean;
  children?: React.ReactNode;
};

const Button = ({
  variant = "outlined",
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.base, props.style]}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white"></ActivityIndicator>
      ) : (
        <Text
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 40,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: "center",
  },
});

export default Button;

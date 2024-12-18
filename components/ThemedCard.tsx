import { View, ViewProps } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedCard = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedCardProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "cardBg"
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps}></View>;
};

export default ThemedCard;

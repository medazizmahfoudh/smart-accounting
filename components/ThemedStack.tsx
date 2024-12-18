import { View, Text, ViewProps } from "react-native";
import React from "react";

export type ThemedStackProps = ViewProps;

const ThemedStack = ({ style, ...otherProps }: ThemedStackProps) => {
  return (
    <View
      {...otherProps}
      style={[{ display: "flex", flexDirection: "column" }, style]}
    />
  );
};

export default ThemedStack;

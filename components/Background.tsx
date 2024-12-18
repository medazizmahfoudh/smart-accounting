import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Pattern from "@/assets/Pattern";

type BackgroundProps = {
  bluish?: boolean | undefined;
};

const Background = ({ bluish = false }: BackgroundProps) => {
  return (
    <>
      {bluish ? (
        <View
          style={{
            backgroundColor: Colors.light.secondary[500],
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.2,
          }}
        ></View>
      ) : null}
      <View
        style={{
          position: "absolute",

          opacity: 0.08,
        }}
      >
        <Pattern></Pattern>
      </View>
    </>
  );
};

export default Background;

import { View, Text } from "react-native";
import React from "react";
import { Path, Rect, Svg } from "react-native-svg";

const SmallLogo = () => {
  return (
    <Svg width="69" height="91" viewBox="0 0 69 91" fill="none">
      <Rect width="22.568" height="22.932" fill="black" />
      <Rect y="68.068" width="22.568" height="22.932" fill="black" />
      <Rect
        x="22.568"
        y="22.932"
        width="22.932"
        height="22.568"
        fill="#1A4A6B"
      />
      <Path d="M22.568 45.5L1.14441e-05 22.932H22.568V45.5Z" fill="#71B4E2" />
      <Path d="M22.568 91L45.5 68.068H22.568V91Z" fill="#3594D6" />
      <Path d="M45.5 0L22.568 22.932H45.5V0Z" fill="#3594D6" />
      <Path d="M22.568 45.5L1.14441e-05 68.068H22.568V45.5Z" fill="#1A4A6B" />
      <Rect x="45.5" width="22.568" height="22.932" fill="black" />
      <Rect x="45.5" y="68.068" width="22.568" height="22.932" fill="black" />
      <Path d="M45.5 45.5L68.068 22.932H45.5V45.5Z" fill="#71B4E2" />
      <Path d="M45.5 45.5L68.068 68.068H45.5V45.5Z" fill="#1A4A6B" />
      <Path d="M45.5 68.068L22.568 45.5H45.5V68.068Z" fill="black" />
    </Svg>
  );
};

export default SmallLogo;

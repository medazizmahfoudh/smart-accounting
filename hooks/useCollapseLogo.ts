import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import {
  Easing,
  ReduceMotion,
  runOnJS,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export const useCollapseLogo = () => {
  const [logoVisible, setLogoVisible] = useState(true);
  const logoOpacity = useSharedValue(1);

  const handleKeyboardShow = () => {
    logoOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.ease,
      reduceMotion: ReduceMotion.System,
    });

    const timer = setTimeout(() => {
      setLogoVisible(false);
    }, 400);

    return timer;
  };

  const handleKeyboardHide = () => {
    logoOpacity.value = withTiming(1, {
      duration: 300,
      easing: Easing.ease,
      reduceMotion: ReduceMotion.System,
    });
    setLogoVisible(true);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        runOnJS(handleKeyboardShow)();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        runOnJS(handleKeyboardHide)();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
      // clearTimeout(time);
    };
  }, []);

  return {
    logoVisible: logoVisible,
    setLogoVisible: setLogoVisible,
    logoOpacity: logoOpacity,
  };
};

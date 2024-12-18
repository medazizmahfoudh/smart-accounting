/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const Palette = {
  grey: {
    100: "#D8D7D7",
    200: "#B0B0B0",
    300: "#898888",
    400: "#616161",
    500: "#3A3939",
    600: "#2E2E2E",
    700: "#232222",
    800: "#171717",
    900: "#0C0B0B",
  },
  primary: {
    100: "#D1DBE1",
    200: "#A3B7C4",
    300: "#7692A6",
    400: "#486E89",
    500: "#1A4A6B",
    600: "#153B56",
    700: "#102C40",
    800: "#0A1E2B",
    900: "#050F15",
  },
  secondary: {
    100: "#D7EAF7",
    200: "#AED4EF",
    300: "#86BFE6",
    400: "#5DA9DE",
    500: "#3594D6",
    600: "#2A76AB",
    700: "#205980",
    800: "#153B56",
    900: "#0B1E2B",
  },
};

export const Colors = {
  light: {
    text: "#11181C",
    background: "#D7EAF7",
    cardBg: "#FFFFFF",
    tint: Palette.secondary[500],
    tintInactive: Palette.primary[200],
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: Palette.secondary[500],
    buttonBgColor: Palette.secondary[500],
    buttonBorderColor: Palette.secondary[500],
    disabledButtonBgColor: Palette.primary[200],
    spinnerColor: Palette.secondary[500],
    separator: Palette.secondary[100],
    plusIcon: Palette.secondary[500],
    minusIcon: Palette.primary[500],
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    cardBg: "#FFFFFF",
    tintInactive: Palette.secondary[200],
    tint: Palette.secondary[500],
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: Palette.secondary[500],
    buttonBgColor: Palette.secondary[500],
    buttonBorderColor: Palette.secondary[500],
    disabledButtonBgColor: Palette.primary[200],
    spinnerColor: Palette.secondary[500],
    separator: Palette.secondary[100],
    plusIcon: Palette.secondary[500],
    minusIcon: Palette.primary[500],
  },
};

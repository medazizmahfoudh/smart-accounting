import { StyleSheet } from "react-native";
import React from "react";
import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/ui/Button";
import { useSession } from "@/context/AuthContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";

const ProfileScreen = () => {
  const { signOut } = useSession();
  const buttonBgColor = useThemeColor({}, "buttonBgColor");

  return (
    <ContainerView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Account</ThemedText>
      </ThemedView>
      <ThemedText>
        If you wish to create a new Ledger, try the button below.
      </ThemedText>
      <Button
        variant="filled"
        style={{
          backgroundColor: buttonBgColor,
        }}
        onPress={() => router.navigate("/ledger-form")}
      >
        Create a new Ledger
      </Button>
      <ThemedText>If you wish to sign out, press the button below.</ThemedText>
      <Button
        variant="filled"
        style={{
          backgroundColor: buttonBgColor,
        }}
        onPress={signOut}
      >
        Sign out
      </Button>
    </ContainerView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  image: {
    height: 300,
  },
});

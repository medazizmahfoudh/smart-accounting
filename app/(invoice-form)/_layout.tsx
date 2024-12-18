import React from "react";
import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@/context/AuthContext";

const ModelLayout = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="invoice-form"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="ledger-form"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default ModelLayout;

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import Button from "@/components/ui/Button";
import { Formik } from "formik";
import { Checkbox } from "expo-checkbox";
import Style from "@/constants/Style";

const LedgerFormScreen = () => {
  const [accountId, setAccountId] = useState("");
  const [isWallet, setIsWallet] = useState(true);
  const buttonBgColor = useThemeColor({}, "buttonBgColor");

  const handleCreateLedger = () => {
    console.log("Creating Ledger:", {
      accountId,
      ledgerType: isWallet ? "Wallet" : "Bank Account",
    });
  };

  return (
    <ContainerView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Create a New Ledger</ThemedText>
      </ThemedView>
      <ThemedText style={{ textAlign: "justify" }}>
        To set up a new ledger, please provide the following details:
      </ThemedText>
      <ScrollView>
        <Formik
          initialValues={{
            ledgerOf: "",
            type: "",
          }}
          onSubmit={async (values, { setSubmitting }) => {}}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <>
              <View style={{ display: "flex", gap: 24 }}>
                <View style={{ display: "flex", gap: 14 }}>
                  {/* Ledger ID */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Ledger Identifier
                    </ThemedText>
                    <TextInput
                      value={values.ledgerOf}
                      onChangeText={handleChange("ledgerOf")}
                      onBlur={handleBlur("ledgerOf")}
                      style={Style.input}
                      placeholder="Ledger Identifier"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>
                  {/* Ledger Type */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Ledger Type
                    </ThemedText>
                    <View style={styles.checkboxContainer}>
                      <Checkbox
                        color="#3594D6"
                        value={isWallet}
                        onValueChange={setIsWallet}
                        style={styles.checkbox}
                      />
                      <Text style={styles.checkboxLabel}>Wallet</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                      <Checkbox
                        color="#3594D6"
                        value={!isWallet}
                        onValueChange={() => setIsWallet(!isWallet)}
                        style={styles.checkbox}
                      />
                      <Text style={styles.checkboxLabel}>Bank Account</Text>
                    </View>
                  </View>
                </View>
                <Button
                  variant="filled"
                  isLoading={isSubmitting}
                  onPress={handleCreateLedger}
                  style={{ backgroundColor: buttonBgColor }}
                >
                  Create Ledger
                </Button>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </ContainerView>
  );
};

export default LedgerFormScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: "normal",
  },
});

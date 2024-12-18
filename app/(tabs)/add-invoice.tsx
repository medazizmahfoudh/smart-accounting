import { StyleSheet, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ContainerView from "@/components/ContainerView";
import Button from "@/components/ui/Button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import { processInvoice } from "@/api/processInvoice";
import { useInvoiceStore } from "@/store/InvoiceStore";

export default function ReviewInvoiceScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [isProcessInvoiceLoading, setProcessInvoiceLoading] = useState(false);
  const disabledButtonBgColor = useThemeColor({}, "disabledButtonBgColor");
  const buttonBgColor = useThemeColor({}, "buttonBgColor");
  const addInvoice = useInvoiceStore((state) => state.addInvoice);

  const handleUploadInvoice = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  const handleProcessInvoice = async () => {
    setProcessInvoiceLoading(true);
    const output = await processInvoice(image);
    if (output?.data) {
      addInvoice(output.data);
      console.log("Doing something");
      router.push({
        pathname: "/invoice-form",
      });
      setProcessInvoiceLoading(false);
    }
  };

  return (
    <ContainerView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Add Invoice</ThemedText>
      </ThemedView>
      <ThemedText style={{ textAlign: "justify" }}>
        Keep your records up to date by uploading your invoices. Press the{" "}
        <ThemedText style={{ fontWeight: "bold" }}>Upload Invoice</ThemedText>{" "}
        button below to add your invoice to the ledger. You can specify whether
        it's <ThemedText style={{ fontWeight: "bold" }}>Sent</ThemedText> or{" "}
        <ThemedText style={{ fontWeight: "bold" }}>Received</ThemedText> to
        organize your transactions effortlessly.
      </ThemedText>
      <Button
        variant="filled"
        onPress={handleUploadInvoice}
        style={{
          backgroundColor: buttonBgColor,
        }}
      >
        Upload Invoice
      </Button>
      <Button
        isLoading={isProcessInvoiceLoading}
        variant="filled"
        onPress={handleProcessInvoice}
        style={{
          backgroundColor: image ? buttonBgColor : disabledButtonBgColor,
        }}
        disabled={!image ? true : false}
      >
        Process Invoice
      </Button>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  image: {
    height: 300,
  },
});

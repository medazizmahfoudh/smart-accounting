import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Formik } from "formik";
import { View } from "react-native";
import Style from "@/constants/Style";
import Button from "@/components/ui/Button";
import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput } from "react-native";
import { useInvoiceStore } from "@/store/InvoiceStore";
import Checkbox from "expo-checkbox";

const InvoiceFormScreen = () => {
  const invoice = useInvoiceStore((state) => state.invoice);
  const [isSent, setIsSent] = useState(true);
  const [ledgerId, setLedgerId] = useState<string>("");
  const buttonBgColor = useThemeColor({}, "buttonBgColor");

  return (
    <ContainerView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Review Invoice Details</ThemedText>
      </ThemedView>
      <ThemedText style={{ textAlign: "justify" }}>
        We’ve pre-filled the invoice details for you. Please review and correct
        any errors before saving.
      </ThemedText>
      <ScrollView>
        <Formik
          initialValues={{
            supplierId: invoice?.supplierId,
            supplierName: invoice?.supplierName,
            supplierAddress: invoice?.supplierAddress,
            invoiceNumber: invoice?.invoiceNumber,
            invoiceDate: invoice?.invoiceDate,
            paymentMethod: invoice?.paymentMethod,
            inventoryRef: invoice?.inventoryRef,
            operatorName: invoice?.operatorName,
            receipt: invoice?.receipt,
            customerRef: invoice?.customerRef,
            customerId: invoice?.customerId,
            customerName: invoice?.customerName,
            customerAddress: invoice?.customerAddress,
            products: [],
            totalRaw: invoice?.totalRaw,
            totalDiscount: invoice?.totalDiscount,
            totalTaxFree: invoice?.totalTaxFree,
            total: invoice?.total,
            totalString: invoice?.totalString,
            taxList: [],
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
                      Ledger
                    </ThemedText>
                    <ThemedText style={{ fontSize: 14 }}>
                      Pick the corresponding Ledger.
                    </ThemedText>
                    {["L1", "L2", "L3"].map((ledger) => (
                      <View key={ledger} style={styles.checkboxContainer}>
                        <Checkbox
                          color="#3594D6"
                          value={ledger == ledgerId}
                          onValueChange={() => setLedgerId(ledger)}
                          style={styles.checkbox}
                        />
                        <ThemedText style={styles.checkboxLabel}>
                          {ledger}
                        </ThemedText>
                      </View>
                    ))}
                  </View>

                  {/* Invoice Type */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Invoice Type
                    </ThemedText>
                    <View style={styles.checkboxContainer}>
                      <Checkbox
                        color="#3594D6"
                        value={isSent}
                        onValueChange={setIsSent}
                        style={styles.checkbox}
                      />
                      <ThemedText style={styles.checkboxLabel}>Sent</ThemedText>
                    </View>
                    <View style={styles.checkboxContainer}>
                      <Checkbox
                        color="#3594D6"
                        value={!isSent}
                        onValueChange={() => setIsSent(!isSent)}
                        style={styles.checkbox}
                      />
                      <ThemedText style={styles.checkboxLabel}>
                        Received
                      </ThemedText>
                    </View>
                  </View>

                  {/* Supplier ID */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Supplier Identifier
                    </ThemedText>
                    <TextInput
                      value={values.supplierId}
                      onChangeText={handleChange("supplierId")}
                      onBlur={handleBlur("supplierId")}
                      style={Style.input}
                      placeholder="Supplier id"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Supplier Name */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Supplier Name
                    </ThemedText>
                    <TextInput
                      value={values.supplierName}
                      onChangeText={handleChange("supplierName")}
                      onBlur={handleBlur("supplierName")}
                      style={Style.input}
                      placeholder="Supplier name"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Supplier Address */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Supplier Address
                    </ThemedText>
                    <TextInput
                      value={values.supplierAddress}
                      onChangeText={handleChange("supplierAddress")}
                      onBlur={handleBlur("supplierAddress")}
                      style={Style.input}
                      placeholder="Supplier address"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Invoice Number */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Invoice Number
                    </ThemedText>
                    <TextInput
                      value={values.invoiceNumber}
                      onChangeText={handleChange("invoiceNumber")}
                      onBlur={handleBlur("invoiceNumber")}
                      style={Style.input}
                      placeholder="Invoice number"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Invoice Date */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Invoice Date
                    </ThemedText>
                    <TextInput
                      value={values.invoiceDate}
                      onChangeText={handleChange("invoiceDate")}
                      onBlur={handleBlur("invoiceDate")}
                      style={Style.input}
                      placeholder="Invoice date"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Payment Method */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Payment Method
                    </ThemedText>
                    <TextInput
                      value={values.paymentMethod}
                      onChangeText={handleChange("paymentMethod")}
                      onBlur={handleBlur("paymentMethod")}
                      style={Style.input}
                      placeholder="Payment method"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Inventory Reference */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Inventory Reference
                    </ThemedText>
                    <TextInput
                      value={values.inventoryRef}
                      onChangeText={handleChange("inventoryRef")}
                      onBlur={handleBlur("inventoryRef")}
                      style={Style.input}
                      placeholder="Inventory reference"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Operator Name */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Operator Name
                    </ThemedText>
                    <TextInput
                      value={values.operatorName}
                      onChangeText={handleChange("operatorName")}
                      onBlur={handleBlur("operatorName")}
                      style={Style.input}
                      placeholder="Operator name"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Receipt */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Receipt
                    </ThemedText>
                    <TextInput
                      value={values.receipt}
                      onChangeText={handleChange("receipt")}
                      onBlur={handleBlur("receipt")}
                      style={Style.input}
                      placeholder="Receipt"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Customer Reference */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Customer Reference
                    </ThemedText>
                    <TextInput
                      value={values.customerRef}
                      onChangeText={handleChange("customerRef")}
                      onBlur={handleBlur("customerRef")}
                      style={Style.input}
                      placeholder="Customer reference"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Customer ID */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Customer ID
                    </ThemedText>
                    <TextInput
                      value={values.customerId}
                      onChangeText={handleChange("customerId")}
                      onBlur={handleBlur("customerId")}
                      style={Style.input}
                      placeholder="Customer ID"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Customer Name */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Customer Name
                    </ThemedText>
                    <TextInput
                      value={values.customerName}
                      onChangeText={handleChange("customerName")}
                      onBlur={handleBlur("customerName")}
                      style={Style.input}
                      placeholder="Customer name"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Customer Address */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Customer Address
                    </ThemedText>
                    <TextInput
                      value={values.customerAddress}
                      onChangeText={handleChange("customerAddress")}
                      onBlur={handleBlur("customerAddress")}
                      style={Style.input}
                      placeholder="Customer address"
                      inputMode="text"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Total Raw */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Total Raw
                    </ThemedText>
                    <TextInput
                      value={values.totalRaw}
                      onChangeText={handleChange("totalRaw")}
                      onBlur={handleBlur("totalRaw")}
                      style={Style.input}
                      placeholder="Total raw"
                      inputMode="decimal"
                    />
                  </View>

                  {/* Total Discount */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Total Discount
                    </ThemedText>
                    <TextInput
                      value={values.totalDiscount}
                      onChangeText={handleChange("totalDiscount")}
                      onBlur={handleBlur("totalDiscount")}
                      style={Style.input}
                      placeholder="Total discount"
                      inputMode="decimal"
                    />
                  </View>

                  {/* Total Tax Free */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Total Tax-Free
                    </ThemedText>
                    <TextInput
                      value={values.totalTaxFree}
                      onChangeText={handleChange("totalTaxFree")}
                      onBlur={handleBlur("totalTaxFree")}
                      style={Style.input}
                      placeholder="Total tax-free"
                      inputMode="decimal"
                    />
                  </View>

                  {/* Total */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Total
                    </ThemedText>
                    <TextInput
                      value={values.total}
                      onChangeText={handleChange("total")}
                      onBlur={handleBlur("total")}
                      style={Style.input}
                      placeholder="Total"
                      inputMode="decimal"
                    />
                  </View>

                  {/* Total String */}
                  <View style={{ display: "flex", gap: 8 }}>
                    <ThemedText
                      type="smallTitle"
                      style={{ fontWeight: "bold" }}
                    >
                      Total String
                    </ThemedText>
                    <TextInput
                      value={values.totalString}
                      onChangeText={handleChange("totalString")}
                      onBlur={handleBlur("totalString")}
                      style={Style.input}
                      placeholder="Total string"
                      inputMode="text"
                    />
                  </View>
                </View>

                <Button
                  isLoading={isSubmitting}
                  onPress={handleSubmit}
                  style={{ backgroundColor: buttonBgColor }}
                >
                  Submit
                </Button>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </ContainerView>
  );
};

export default InvoiceFormScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  image: {
    height: 300,
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

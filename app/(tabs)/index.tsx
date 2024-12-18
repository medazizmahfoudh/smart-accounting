import { ScrollView, StyleSheet, View, Text } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ContainerView from "@/components/ContainerView";
import ThemedCard from "@/components/ThemedCard";
import ThemedStack from "@/components/ThemedStack";
import { ledgers } from "@/api/data/ledgers";
import Icon from "react-native-vector-icons/AntDesign";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HomeScreen() {
  const separatorColor = useThemeColor({}, "separator");
  const plusIconColors = useThemeColor({}, "plusIcon");
  const minusIconColor = useThemeColor({}, "minusIcon");

  return (
    <ContainerView>
      <ThemedView>
        <ThemedView style={styles.titleContainer}>
          <HelloWave />
          <ThemedText type="title">Welcome!</ThemedText>
        </ThemedView>
        <ThemedText type="smallTitle">Mohamed Aziz Mahfoudh</ThemedText>
      </ThemedView>
      <ScrollView>
        <ThemedStack style={{ gap: 18 }}>
          {ledgers &&
            ledgers.map((ledger) => (
              <ThemedCard style={styles.cardContainer} key={ledger.ledgerId}>
                <ThemedStack>
                  <ThemedStack
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <ThemedStack>
                      <ThemedText style={{ fontSize: 12 }}>
                        Ledger {ledger.ledgerId}
                      </ThemedText>
                      <ThemedText style={{ fontWeight: "bold" }}>
                        Invoices
                      </ThemedText>
                    </ThemedStack>
                    <ThemedStack>
                      <ThemedText style={{ textAlign: "right", fontSize: 12 }}>
                        Balance
                      </ThemedText>
                      <ThemedText
                        style={{
                          textAlign: "right",
                          fontSize: 18,
                          color: "#3594D6",
                          fontWeight: "bold",
                        }}
                      >
                        {ledger.balance} DT
                      </ThemedText>
                    </ThemedStack>
                  </ThemedStack>

                  <ThemedStack>
                    {ledger.transactions.map((invoice) => (
                      <View
                        key={invoice.transactionId}
                        style={{
                          paddingBlock: 8,
                          display: "flex",
                          flexDirection: "row",
                          gap: 14,
                          justifyContent: "space-between",
                          borderBottomWidth: 1,
                          borderBottomColor: separatorColor,
                        }}
                      >
                        <View
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          {invoice.invoiceType == "Sent" ? (
                            <Icon
                              name="plussquare"
                              size={32}
                              color={plusIconColors}
                            />
                          ) : (
                            <Icon
                              name="minussquare"
                              size={32}
                              color={minusIconColor}
                            />
                          )}
                        </View>
                        <View style={{ flex: 2 }}>
                          <ThemedText type="smallTitle">
                            <ThemedText
                              type="smallTitle"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              from
                            </ThemedText>{" "}
                            {invoice.supplierName}
                          </ThemedText>
                          <ThemedText type="smallTitle">
                            <ThemedText
                              type="smallTitle"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              to
                            </ThemedText>{" "}
                            {invoice.customerName}
                          </ThemedText>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                          <ThemedText>
                            {invoice.total}{" "}
                            <ThemedText
                              style={{ fontSize: 12, fontWeight: "bold" }}
                            >
                              DT
                            </ThemedText>
                          </ThemedText>
                        </View>
                      </View>
                    ))}
                  </ThemedStack>
                </ThemedStack>
              </ThemedCard>
            ))}
        </ThemedStack>
      </ScrollView>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardContainer: {
    padding: 20,
    borderRadius: 8,
  },
});

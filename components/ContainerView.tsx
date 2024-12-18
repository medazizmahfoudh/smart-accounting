import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Background from "./Background";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren;

export default function ContainerView({ children }: Props) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    paddingTop: 48,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});

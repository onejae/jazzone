import React, { useState } from "react";
import { Text, Pressable, Button } from "react-native";
import { View } from "./Themed";
import { StyleSheet } from "react-native";
import { MenuButton } from "./MenuButton";

export function ControlBar(props: any) {
  const [isQuizEnabled, setQuizEnable] = useState(false);
  const toggleSwitch = () => setQuizEnable((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <MenuButton>ON/OFF</MenuButton>
      <MenuButton>
        <Text>Start{"\n"}</Text>
        <Text>Practice</Text>
      </MenuButton>
      <MenuButton>Tempo</MenuButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#521438",
    height: "100%",
  },
  modeSwitch: {},
});

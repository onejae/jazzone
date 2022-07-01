import React, { useState } from "react";
import { Text, Pressable, Switch } from "react-native";
import { View } from "./Themed";
import { StyleSheet } from "react-native";

export function ControlBar(props: any) {
  const [isQuizEnabled, setQuizEnable] = useState(false);
  const toggleSwitch = () => setQuizEnable((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Switch
        style={styles.modeSwitch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isQuizEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isQuizEnabled}
      />
      <Pressable>
        <Text>test</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  modeSwitch: {},
});

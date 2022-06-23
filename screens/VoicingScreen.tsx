import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { ToggleButton } from "../components/MenuButton";
import { MusicSheet } from "../components/MusicSheet";
import { SelectButton } from "../components/SelectButton";
import { useState } from "react";
import VOICINGS from "../constants/Voicing";
import KEYS from "../constants/Key";
import React from "react";

export const VoicingScreen = React.forwardRef((props, ref) => {
  const [voicing, setVoicing] = useState(0);
  const [key, setKey] = useState(0);

  function handleVoicing(idx: number) {
    setVoicing(idx);
  }

  function handleKey(idx: number) {
    setKey(idx);
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" />
      <Text style={styles.title}> C major Block chord</Text>
      <View style={styles.separator} lightColor="#eee" />
      <MusicSheet />
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.chordContainer}>
        {Object.entries(VOICINGS).map((item, idx) => {
          return (
            <SelectButton
              selected={idx === voicing}
              name={item[1].name}
              key={idx}
              onPress={() => handleVoicing(idx)}
            >
              {item[1].name}
            </SelectButton>
          );
        })}
      </View>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.chordContainer}>
        <ToggleButton>Maj7</ToggleButton>
      </View>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.chordContainer}>
        {Object.entries(KEYS).map((item, idx) => {
          return (
            <SelectButton
              key={idx}
              selected={idx === key}
              onPress={() => handleKey(idx)}
            >
              {item[1].name}
            </SelectButton>
          );
        })}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  chordContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  musicSheet: {
    height: 200,
  },
});

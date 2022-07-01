import { StyleSheet, Switch, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { MusicSheet } from "../components/MusicSheet";
import { ChordName, VoicingName } from "../constants/Voicing";
import React from "react";
import { ControlBar } from "../components/ControlBar";

import { KeyName } from "../constants/Key";
import { SelectionBar } from "../components/SelectionBar";

export const VoicingScreen = React.forwardRef((props, ref) => {
  const voicingDisplayList: VoicingName[] = ["blockvoicing", "drop2nd"];
  const chordDisplayList: ChordName[] = [
    "Maj7",
    "7",
    "m7",
    "dim7",
    "sus4",
    "aug",
    "b9b13",
  ];

  const keyDisplayList: KeyName[] = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" />
      <Text style={styles.title}> C major Block chord</Text>
      <View style={styles.separator} lightColor="#eee" />
      <MusicSheet />
      <View style={styles.separator} lightColor="#eee" />
      <SelectionBar orderedItemList={voicingDisplayList} />
      <View style={styles.separator} lightColor="#eee" />
      <SelectionBar orderedItemList={chordDisplayList} />
      <View style={styles.separator} lightColor="#eee" />
      <SelectionBar orderedItemList={keyDisplayList} />
      <View>
        <ControlBar></ControlBar>
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
    marginVertical: 5,
    height: 1,
    width: "100%",
  },
  musicSheet: {
    height: 200,
  },
});

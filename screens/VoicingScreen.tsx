import { StyleSheet, Switch, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { MusicSheet } from "../components/MusicSheet";
import { ChordName, VoicingName } from "../constants/Voicing";
import React, { useMemo, useState } from "react";
import { ControlBar } from "../components/ControlBar";

import { KeyName } from "../constants/Key";
import { SelectionBar } from "../components/SelectionBar";

import SwitchSelector from "react-native-switch-selector";

type mode = "lookup" | "practice";
export const VoicingScreen = React.forwardRef((props, ref) => {
  const [mode, setMode] = useState("lookup");

  const voicingDisplayList: VoicingName[] = ["blockvoicing", "drop2nd"];
  const chordDisplayList: ChordName[] = [
    "6",
    "Maj7",
    "7",
    "m7",
    "dim7",
    "sus4",
    "aug",
    "b9b13",
  ];

  const [key, setKey] = useState<KeyName>("C");
  const [voicing, setVoicing] = useState<VoicingName>("blockvoicing");
  const [chord, setChord] = useState<ChordName>("Maj7");
  const title = useMemo(
    () => key + chord + " " + voicing,
    [key, chord, voicing]
  );

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

  const options = [
    { label: "01:00", value: "1" },
    { label: "01:30", value: "1.5" },
    { label: "02:00", value: "2" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" />
      <Text style={styles.title}> {title} </Text>
      <View style={styles.separator} lightColor="#eee" />
      <MusicSheet style={styles.musicSheetContainer} />
      <View style={styles.separator} lightColor="#eee" />
      <SelectionBar
        orderedItemList={voicingDisplayList}
        onChange={(idx: any) => setVoicing(voicingDisplayList[idx])}
      />
      <View style={styles.separator} lightColor="#eee" />
      <SelectionBar
        orderedItemList={chordDisplayList}
        onChange={(idx: any) => setChord(chordDisplayList[idx])}
      />
      <View style={styles.separator} lightColor="#eee" />
      <SelectionBar
        orderedItemList={keyDisplayList}
        onChange={(idx: any) => setKey(keyDisplayList[idx])}
      />
      <View style={styles.controlbarContainer}>
        <ControlBar></ControlBar>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
  controlbarContainer: {
    height: 70,
    marginTop: "auto",
  },
  musicSheetContainer: {
    height: 200,
  },
});

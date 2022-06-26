import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { ToggleButton } from "../components/MenuButton";
import { MusicSheet } from "../components/MusicSheet";
import { SelectButton } from "../components/SelectButton";
import { useEffect, useState } from "react";
import { VoicingName } from "../constants/Voicing";
import { Keys } from "../constants/Key";
import React from "react";
import { generateVoicingWithTopNote } from "../lib/voicing";
import { NoteIndex } from "../constants/Note";
import { noteToAbcjsString } from "../lib/abcjs";

export const VoicingScreen = React.forwardRef((props, ref) => {
  const voicingDisplayIdx: VoicingName[] = ["blockvoicing", "drop2nd"];

  const [voicingIdx, setVoicingIdx] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const notes = generateVoicingWithTopNote(
      { name: "C", idx: 0 },
      voicingDisplayIdx[voicingIdx],
      {
        noteIndex: 15,
      }
    );

    const abcString = noteToAbcjsString(notes);

    console.log(abcString);
  }, [voicingIdx]);

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
        {voicingDisplayIdx.map((item, idx) => {
          return (
            <SelectButton
              selected={idx === voicingIdx}
              name={item}
              key={idx}
              onPress={() => setVoicingIdx(idx)}
            >
              {item}
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
        {Keys.map((item, idx) => {
          return (
            <SelectButton
              key={idx}
              selected={idx === key}
              onPress={() => handleKey(idx)}
            >
              {item.name}
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

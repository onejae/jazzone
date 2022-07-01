import { StyleSheet, Switch, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { ToggleButton } from "../components/MenuButton";
import { MusicSheet } from "../components/MusicSheet";
import { SelectButton } from "../components/SelectButton";
import { useEffect, useState } from "react";
import { ChordName, VoicingName } from "../constants/Voicing";
import { Keys } from "../constants/Key";
import React from "react";
import { generateVoicingWithTopNote } from "../lib/voicing";
import { NoteIndex } from "../constants/Note";
import { noteToAbcjsString } from "../lib/abcjs";
import { ControlBar } from "../components/ControlBar";



import CommonStyles from "../components/StyleSheet";

export const VoicingScreen = React.forwardRef((props, ref) => {
  const voicingDisplayIdx: VoicingName[] = ["blockvoicing", "drop2nd"];
  const chordDisplayIdx: ChordName[] = [
    "Maj7",
    "7",
    "m7",
    "dim7",
    "sus4",
    "aug",
    "b9b13",
  ];


  const [voicingIdx, setVoicingIdx] = useState(0);
  const [key, setKey] = useState(0);
  const [multiVoicing, setMultiVoicing] = useState(false);
  const [multiChord, setMultiChord] = useState(false);
  const [multiKey, setMultiKey] = useState(false);

  const [voicingSelection, setVocingSelection] = useState(
    Array.from(Array(voicingDisplayIdx.length), () => {
      return false;
    })
  );

  const [chordSelection, setChordSelection] = useState(
    Array.from(Array(chordDisplayIdx), () => {
      return false;
    })
  );

  useEffect(() => {
    const notes = generateVoicingWithTopNote(
      { name: "C", idx: 0 },
      voicingDisplayIdx[voicingIdx],
      {
        noteIndex: 15,
      }
    );

    const abcString = noteToAbcjsString(notes);
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
      <View style={styles.selectionContainer}>
        <View style={styles.checkBoxContainer}>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/images/multi-choice.png")}
          />
          <Switch
            style={CommonStyles.smallSwitch}
            trackColor={{
              false: CommonStyles.smallSwitch.trackColor.false,
              true: CommonStyles.smallSwitch.trackColor.true,
            }}
            thumbColor={
              multiVoicing
                ? CommonStyles.smallSwitch.thumbColor.true
                : CommonStyles.smallSwitch.thumbColor.false
            }
            ios_backgroundColor={CommonStyles.smallSwitch.ios_backgroundColor}
            onValueChange={(value) => setMultiVoicing(value)}
            value={multiVoicing}
          />
        </View>
        <View style={styles.chordListContainer}>
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
      </View>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.selectionContainer}>
        <View style={styles.checkBoxContainer}>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/images/multi-choice.png")}
          />
          <Switch
            style={CommonStyles.smallSwitch}
            trackColor={{
              false: CommonStyles.smallSwitch.trackColor.false,
              true: CommonStyles.smallSwitch.trackColor.true,
            }}
            thumbColor={
              multiChord
                ? CommonStyles.smallSwitch.thumbColor.true
                : CommonStyles.smallSwitch.thumbColor.false
            }
            ios_backgroundColor={CommonStyles.smallSwitch.ios_backgroundColor}
            onValueChange={(value) => setMultiChord(value)}
            value={multiChord}
          />
        </View>
        <View style={styles.chordListContainer}>
          {chordDisplayIdx.map((item, idx) => {
            return <SelectButton>{item}</SelectButton>;
          })}
        </View>
      </View>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.selectionContainer}>
        <View style={styles.checkBoxContainer}>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/images/multi-choice.png")}
          />
          <Switch
            style={CommonStyles.smallSwitch}
            trackColor={{
              false: CommonStyles.smallSwitch.trackColor.false,
              true: CommonStyles.smallSwitch.trackColor.true,
            }}
            thumbColor={
              multiKey
                ? CommonStyles.smallSwitch.thumbColor.true
                : CommonStyles.smallSwitch.thumbColor.false
            }
            ios_backgroundColor={CommonStyles.smallSwitch.ios_backgroundColor}
            onValueChange={(value) => setMultiKey(value)}
            value={multiKey}
          />
        </View>
        <View style={styles.chordListContainer}>
          {/* {Keys.map((item, idx) => {
            return (
              <SelectButton
                key={idx}
                selected={idx === key}
                onPress={() => handleKey(idx)}
              >
                {item.name}
              </SelectButton>
            );
          })} */}
        </View>
      </View>
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
  selectionContainer: {
    display: "flex",
    paddingTop: 0,
  },
  chordListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  musicSheet: {
    height: 200,
  },
  checkBox: {
    marginTop: 200,
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginRight: 0,
    alignItems: "center",
    marginLeft: "auto",
  },
});

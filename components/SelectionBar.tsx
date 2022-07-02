import { Switch, Image, StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";
import CommonStyles from "../components/StyleSheet";
import { useCallback, useState } from "react";
import { SelectButton } from "../components/SelectButton";
import { ScreenStackHeaderRightView } from "react-native-screens";
import Checkbox from "expo-checkbox";

interface SelectionBarProps {
  orderedItemList: string[];
  onChange?: (idx: number) => void;
}

export const SelectionBar = (props: SelectionBarProps) => {
  const [multiMode, setMultiMode] = useState(false);

  const getEmptyList = (idx: number = 0) => {
    const list = Array.from(Array(props.orderedItemList.length), () => false);

    list[idx] = true;
    return list;
  };
  const [selectTable, setSelectTable] = useState(getEmptyList());

  const selectCheck = useCallback(
    (idx: number) => {
      return selectTable[idx];
    },
    [selectTable, multiMode]
  );

  return (
    <View style={styles.selectionContainer}>
      <View style={styles.chordListContainer}>
        {props.orderedItemList.map((item, idx) => {
          return (
            <SelectButton
              selected={selectCheck(idx)}
              name={item}
              key={idx}
              onPress={() => {
                const current = multiMode
                  ? Array.from(selectTable)
                  : getEmptyList(idx);

                if (multiMode) current[idx] = !current[idx];
                if (props.onChange) props.onChange(idx);

                setSelectTable(current);
              }}
            >
              {item}
            </SelectButton>
          );
        })}
      </View>
      <View style={styles.checkBoxContainer}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <SelectButton
            selected={multiMode}
            onPress={() => {
              if (multiMode) {
                setSelectTable(getEmptyList());
              }
              setMultiMode(!multiMode);
            }}
            borderRadius={45}
            height={40}
            width={40}
          >
            Multi
            {/* <Text style={styles.multiSelectText}>Multi</Text> */}
          </SelectButton>
        </View>
        <SelectButton borderRadius={40} height={40} width={40}>
          CLR
        </SelectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectionContainer: {
    display: "flex",
    paddingTop: 0,
    flexDirection: "row",
  },
  chordListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  checkBoxContainer: {
    flexDirection: "column",
    marginRight: 0,
    alignItems: "center",
    marginLeft: "auto",
  },
  checkBox: {
    marginLeft: 10,
    color: "#000",
  },
  multiSelectText: {
    fontSize: 9,
    textAlign: "center",
  },
});

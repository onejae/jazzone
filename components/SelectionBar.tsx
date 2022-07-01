import { Switch, Image, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import CommonStyles from "../components/StyleSheet";
import { useCallback, useState } from "react";
import { SelectButton } from "../components/SelectButton";

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
            multiMode
              ? CommonStyles.smallSwitch.thumbColor.true
              : CommonStyles.smallSwitch.thumbColor.false
          }
          ios_backgroundColor={CommonStyles.smallSwitch.ios_backgroundColor}
          onValueChange={(value) => {
            if (props.onChange) props.onChange(0);
            if (multiMode == true) {
              setSelectTable(getEmptyList());
            }
            setMultiMode(value);
          }}
          value={multiMode}
        />
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  selectionContainer: {
    display: "flex",
    paddingTop: 0,
  },
  chordListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginRight: 0,
    alignItems: "center",
    marginLeft: "auto",
  },
});

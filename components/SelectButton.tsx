import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Pressable } from "react-native";

export const SelectButton = (props: any) => {
  const [touch, setTouch] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      borderWidth: 1,
      borderColor: "#F07810",
      borderRadius: props.borderRadius ? props.borderRadius : 5,
      padding: 10,
      margin: 5,
    },
    buttonPress: {
      backgroundColor: "#F07810",
      borderRadius: props.borderRadius ? props.borderRadius : 5,
      borderWidth: 1,
      borderColor: "#F07810",
      padding: 10,
      margin: 5,
    },
    buttonText: {
      color: "#F07810",
    },
    buttonTextPress: {
      textAlign: "center",
    },
  });

  const touchProps = {
    style:
      props.selected === true || touch === true
        ? styles.buttonPress
        : styles.button,
    onPressIn: () => {
      setTouch(true);
    },
    onPressOut: () => {
      setTouch(false);
    },
    ...props,
  };

  return (
    <Pressable {...touchProps}>
      <Text
        style={
          props.selected === true || touch === true
            ? styles.buttonTextPress
            : styles.buttonText
        }
      >
        {props.children}
      </Text>
    </Pressable>
  );
};

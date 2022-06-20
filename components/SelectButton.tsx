import { useState } from "react"
import { StyleSheet } from "react-native"
import { Text, Pressable } from "react-native"

export function SelectButton(props: any) {
  const [isPress, setIsPress] = useState(false)

  const touchProps = {
    style: isPress ? styles.buttonPress : styles.button,
    onPressOut: () => setIsPress(false),
    onPressIn: () => setIsPress(true),
    ...props,
  }

  return (
    <Pressable {...touchProps}>
      <Text style={isPress ? styles.buttonTextPress : styles.buttonText}>
        {props.children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    border: "1px solid #F28442",
    borderRadius: 5,
    padding: "10px",
    display: "inline",
    marginLeft: "10px",
    marginRight: "10px",
  },
  buttonPress: {
    border: "1px solid #F28442",
    backgroundColor: "#F28442",
    borderRadius: 5,
    padding: "10px",
    display: "inline",
    marginLeft: "10px",
    marginRight: "10px",
  },
  buttonText: {
    color: "#F28442",
  },
  buttonTextPress: {
    color: "white",
  },
})

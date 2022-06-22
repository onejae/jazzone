import { useState } from "react"
import { StyleSheet } from "react-native"
import { Text, Pressable } from "react-native"

export function SelectButton(props: any) {
  const [isPress, setIsPress] = useState(false)

  const touchProps = {
    style: isPress ? styles.buttonPress : styles.button,
    onPress: () => setIsPress(!isPress),
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
    borderWidth: 1,
    borderColor: "#F28442",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  buttonPress: {
    backgroundColor: "#F28442",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#F28442",
    padding: 10,
    margin: 5,
  },
  buttonText: {
    color: "#F28442",
  },
  buttonTextPress: {
    color: "white",
  },
})

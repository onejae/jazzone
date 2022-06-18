import { Platform, StyleSheet } from "react-native"
import { Pressable } from "react-native"
import { withSafeAreaInsets } from "react-native-safe-area-context"
import { Text, View } from "../components/Themed"
import { MenuButton } from "../components/MenuButton"

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Jazz One</Text>
      <View style={styles.separator} lightColor="#eee" />
      <div>
        <MenuButton>Voicing</MenuButton>
        <MenuButton>Scale</MenuButton>
      </div>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
})

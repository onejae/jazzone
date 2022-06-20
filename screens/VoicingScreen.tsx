import { StyleSheet } from "react-native"
import { Text, View } from "../components/Themed"
import { MenuButton } from "../components/MenuButton"

export default function VoicingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" />
      <Text style={styles.title}> C major Block chord</Text>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.chordContainer}>
        <MenuButton>block voicing</MenuButton>
        <MenuButton>drop2nd</MenuButton>
      </View>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.chordContainer}>
        <MenuButton>Maj7</MenuButton>
      </View>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.chordContainer}>
        <MenuButton>C</MenuButton>
        <MenuButton>Db</MenuButton>
        <MenuButton>D</MenuButton>
        <MenuButton>Eb</MenuButton>
        <MenuButton>E</MenuButton>
        <MenuButton>F</MenuButton>
        <MenuButton>F#</MenuButton>
        <MenuButton>G</MenuButton>
        <MenuButton>Ab</MenuButton>
        <MenuButton>A</MenuButton>
        <MenuButton>Bb</MenuButton>
        <MenuButton>B</MenuButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
})

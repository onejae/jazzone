import { Platform, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";
import { MenuButton } from "../components/MenuButton";
import Navigation from "../navigation";

export default function MainScreen(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Jazz One</Text>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.menu}>
        <MenuButton onPress={() => props.navigation.navigate("Voicing")}>
          Voicing
        </MenuButton>
        <MenuButton>Scale</MenuButton>
        <MenuButton>2-5-1</MenuButton>
      </View>
    </View>
  );
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
  menu: {
    flexDirection: "row",
  },
});

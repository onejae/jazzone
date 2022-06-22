import React from "react"

import { Score } from "../components/react-vexflow"
import { StyleSheet } from "react-native"
import { View } from "../components/Themed"

export function MusicSheet() {
  return (
    <View style={styles.container}>
      <Score keySignature="C" staves={[["g3", "d4", "e4", "d4"]]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

import React, { Component, useEffect, useRef, useState } from "react";

import { StyleSheet } from "react-native";
import { View } from "../components/Themed";

import { WebView } from "react-native-webview";

import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";
import { isLoading } from "expo-font";

function useEditorHTML() {
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFile = async () => {
      setLoading(true);
      try {
        const files = await Asset.loadAsync(require("../assets/index.html"));
        if (files.length > 0 && files[0].localUri) {
          const fileContents = await readAsStringAsync(files[0].localUri);
          setHtml(fileContents);
        } else {
          setError("Unable to fetch localUri");
        }
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    loadFile();
  }, []);

  return { html, isLoading };
}

export const MusicSheet = () => {
  const { html, loading } = useEditorHTML();
  const webref = useRef();
  const notation = `
      abc = '|eABC|'
      load();
      true;
    `;
  const drawSheet = () => {
    setTimeout(() => {
      if (webref.current) {
        webref.current.injectJavaScript(notation);
      }
    }, 100);
  };

  return (
    <View style={styles.container}>
      <WebView
        onLoad={() => {
          drawSheet();
        }}
        ref={webref}
        source={{ html }}
        onMessage={(event) => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    display: "flex",
  },
});

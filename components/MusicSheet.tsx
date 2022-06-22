import React, { Component, useEffect, useRef, useState } from "react";

import { Score } from "../components/react-vexflow";
import { Platform, StyleSheet, Image } from "react-native";
// import { View } from "../components/Themed";
import { View } from "react-native"

import { WebView } from "react-native-webview";

import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";
import { isLoading } from "expo-font";

import abcjs from '../assets/abcjs-min'

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

// export class MusicSheet extends Component {
  export const MusicSheet3 = () => {

  const { html, loading } = useEditorHTML();
    const runFirst = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

    const webref = useRef();


    const run = `
    document.body.style.backgroundColor = 'blue';
    true;
  `;


    setTimeout(() => {
      webref.current.injectJavaScript(run);
    }, 3000);

    return (
      <View style={{ flex: 1 }}>
        <WebView
        ref={webref}
        source={{ html }}
          // source={{
            // uri: 'https://github.com/react-native-webview/react-native-webview',
          // }}
          onMessage={(event) => {}}
          // injectedJavaScript={runFirst}
        />
      </View>
    );
}

export const MusicSheet = () => {

  const { html, loading } = useEditorHTML();
  const webref = useRef();
  // let webref;
  const notation = `
    window.location = "http://www.naver.com"
    `

  setTimeout(() => {
    webref.current.injectJavaScript(notation)
  }, 3000)

  return (
    <View style={styles.container}>
      <WebView
        ref={webref}
        source={{ html }}
        // onMessage={(event) => {}}
        // javaScriptEnabled={true}

        // injectJavaScript={runFirst}
        // injectedJavaScriptBeforeContentLoaded={notation}
        // injectedJavaScript={notation}
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

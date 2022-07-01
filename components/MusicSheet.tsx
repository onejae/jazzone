import React, { useEffect, useRef, useState } from "react";

import { StyleSheet, CheckBox } from "react-native";
import { View } from "../components/Themed";
import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";

export const MusicSheet = () => {
  const [index, indexLoadingError] = useAssets(
    require("../assets/musicsheetview/index.html")
  );

  const [js, jsLoadingError] = useAssets(
    require("../assets/musicsheetview/abcjs-basic.html")
  );

  const [osmd, osmdLoadError] = useAssets(
    require("../assets/musicsheetview/opensheetmusicdisplay.min.js.html")
  );

  const [html, setHtml] = useState("");

  const scriptTagOpen = "<script type='text/javascript'>";
  const scriptTagClose = "</script>";

  const [xml, xmlLoadError] = useAssets(
    require("../assets/musicsheetview/sample.html")
  );

  if (index && osmd) {
    readAsStringAsync(index[0].localUri).then((htmlData) => {
      readAsStringAsync(osmd[0].localUri).then((osmdData) => {
        if (xml) {
          readAsStringAsync(xml[0].localUri).then((xmlData) => {
            const test = `<script>
  var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdContainer");
    osmd.setOptions({
      backend: "canvas",
      drawTitle: false,
      drawComposer: false,
      drawingParameters: "compacttight", 
      drawMeasureNumbers: false,
      drawTimeSignatures: false,
    });
    osmd.load(\`${xmlData}\`).then(function() {
      osmd.render();
    })
    </script>
  `;
            setHtml(
              htmlData + scriptTagOpen + osmdData + scriptTagClose + test
            );
          });
        }
      });
    });
  }

  if (index && js && js[0].localUri) {
    readAsStringAsync(js[0].localUri).then((data) => {
      if (index[0].localUri) {
      }
    });
  }

  const webref = useRef();
  const notation = `
		var notation = '|^C,|';
    abc = head + notation;  

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

import {StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';


export default function ProjectScreen() {

  return (
    <View style={styles.container}>

      <WebView
          source={{ uri: 'https://redowan.mercegrower.com/projects' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
import {StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';


export default function AboutScreen() {

  return (
    <View style={styles.container}>
      <WebView
          source={{ uri: 'https://redowan.mercegrower.com/about' }}
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
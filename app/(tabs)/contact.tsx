import {StyleSheet, View , ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function ContactScreen() {

  return (
    <View style={styles.container}>
      <WebView
          source={{ uri: 'https://redowan.mercegrower.com/contact' }}
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
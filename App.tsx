import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import GraphEditor from "./src/screens/GraphEditor";

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);


export default function App() {
  return (
    <View style={styles.container}>
      <GraphEditor/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

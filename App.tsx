import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { firebase } from '@react-native-firebase/app';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

// When using google-services.json (Android) and GoogleService-Info.plist (iOS),
// the Firebase SDK is configured automatically.
// This check ensures we only initialize Firebase once.
if (!firebase.apps.length) {
  firebase.initializeApp();
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

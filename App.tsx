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

/**
 * The main component of the application.
 * It sets up the root view for gesture handling and renders the main navigator.
 */
export default function App() {
  return (
    // GestureHandlerRootView is a wrapper required for react-native-gesture-handler to work correctly.
    <GestureHandlerRootView style={styles.container}>
      {/* AppNavigator contains the navigation logic for the entire application. */}
      <AppNavigator />
    </GestureHandlerRootView>
  );
}

// StyleSheet for the App component.
const styles = StyleSheet.create({
  // The container style ensures that the main app view takes up the full screen.
  container: {
    flex: 1,
  },
});

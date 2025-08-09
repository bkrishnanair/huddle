/* AppNavigator contains the navigation logic for the entire application. */

// Import necessary components from React and React Native
import React, { useState, useEffect } from 'react';
// Import navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import Firebase authentication module
import auth from '@react-native-firebase/auth';

// Import screen components
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MapScreen from '../screens/Map/MapScreen'; // Import the new MapScreen

// Create a stack navigator
const Stack = createStackNavigator();

/**
 * The main navigator for the application.
 * It handles the authentication flow, showing the login/signup screens
 * or the main app screen based on the user's authentication state.
 */
export default function AppNavigator() {
    // State to track if the authentication state is being initialized
    const [initializing, setInitializing] = useState(true);
    // State to hold the user object
    const [user, setUser] = useState();

    /**
     * A callback function that gets called when the user's
     * authentication state changes.
     * @param {object} user - The user object from Firebase.
     */
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    }

    // Set up a listener for authentication state changes
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // Unsubscribe from the listener when the component unmounts
    }, []);

    // While the authentication state is initializing, return null (or a loading spinner)
    if (initializing) {
        return null;
    }

    // Render the navigation container with the appropriate screens
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    // If the user is logged in, show the MapScreen
                    <Stack.Screen 
                        name="Huddle" 
                        component={MapScreen}
                        options={{ headerShown: false }} // Hide the header for the map
                    />
                ) : (
                    // If the user is not logged in, show the login and signup screens
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

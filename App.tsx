// App.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterStep1 from './src/screens/register1';
import RegisterStep2 from './src/screens/register2';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="RegisterStep1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
            <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
        </Stack.Navigator>
    );
}

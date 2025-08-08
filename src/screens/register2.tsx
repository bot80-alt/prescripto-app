// screens/RegisterStep2.tsx
import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
const { colors } = useTheme();

export default function RegisterStep2() {
    const { height } = Dimensions.get('window');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={[styles.container, { height }]}>
            <Text style={styles.title}>Register - Step 2</Text>

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Connect Wallet</Text>
                <FontAwesome5 name="wallet" size={20} color={colors.white} style={{ marginLeft: 8 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: colors.lightPurple,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: colors.white,
        marginBottom: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        backgroundColor: colors.white,
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: colors.blue,
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
});
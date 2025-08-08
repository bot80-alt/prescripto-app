// screens/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../src/theme/theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[styles.container, { height }]}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Patient Name"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'RegisterStep1' as never }],
            })}>
                <Text style={styles.buttonText}>Login</Text>
                <Feather name="log-in" size={20} color={colors.white} style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerLink} onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'RegisterStep1' as never }],
            })}>
                <Text style={styles.registerText}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        color: colors.white,
        marginBottom: 32,
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
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    registerLink: {
        marginTop: 16,
        alignItems: 'center',
    },
    registerText: {
        color: colors.white,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});
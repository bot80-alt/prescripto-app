// screens/RegisterStep1.tsx
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native';
import { useTheme } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function RegisterStep1() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const genders = ['Male', 'Female', 'Other'];

  return (
    <View style={[styles.screen]}>
      <View style={styles.cardContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login Here</Text>
        </View>

        <View style={styles.card}>
          {/* Google Sign-In */}
          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={20} color="#4285F4" />
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or</Text>

          <TextInput
            style={styles.input}
            placeholder="Patient Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
          />

          {/* Gender Selection */}
          <View style={styles.genderRow}>
            {genders.map((g) => (
              <TouchableOpacity
                key={g}
                onPress={() => setGender(g)}
                style={[
                  styles.genderOption,
                  gender === g && { backgroundColor: colors.blue },
                ]}
              >
                <Text style={{ color: gender === g ? colors.white : colors.blue }}>
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Proceed Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'RegisterStep2' as never }],
            })}
          >
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Request a <Text style={styles.underline}>New Password</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>
              New here? <Text style={styles.underline}>Create an account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DCE1F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    borderRadius: 28,
    overflow: 'hidden',
    elevation: 10,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#E25C47',
    paddingVertical: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    padding: 24,
    backgroundColor: '#fff',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
    padding: 12,
    borderRadius: 32,
    justifyContent: 'center',
    marginBottom: 16,
  },
  googleText: {
    marginLeft: 8,
    color: '#333',
    fontWeight: '500',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#888',
  },
  input: {
    backgroundColor: '#F1F3F5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 14,
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  genderOption: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5A67D8',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 32,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    marginTop: 12,
    alignItems: 'center',
  },
  linkText: {
    color: '#000',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
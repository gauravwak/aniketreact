// Screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!email.trim()) {
      Alert.alert('Missing email', 'Please enter your email address.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Invalid email', 'Enter a valid email address.');
      return;
    }
    // TODO: replace alert with your API call
    Alert.alert('Reset link sent', `A password reset link was sent to ${email}.`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.title}>Reset Your Password</Text>
          <Text style={styles.subtitle}>
            Enter the email you used for your Monopoly account and we’ll send a reset link.
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="#c2b280"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit}>
            <Text style={styles.sendBtnText}>Send Reset Link</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backLink}>← Back to Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#013220' },
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', color: '#FFD700', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#f5f5dc', textAlign: 'center', marginBottom: 20 },
  input: {
    height: 48,
    backgroundColor: '#033d25',
    paddingHorizontal: 12,
    borderRadius: 10,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fcfbfbff',
    marginBottom: 18,
  },
  sendBtn: {
    alignSelf: 'center',
    width: 220,
    borderRadius: 28,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FFD700',
    elevation: 8,
  },
  sendBtnText: { color: '#013220', fontWeight: '800', fontSize: 16 },
  backLink: { color: '#53affbff', textAlign: 'center', marginTop: 12 },
});

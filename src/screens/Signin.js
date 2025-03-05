import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LoginScreen2 = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access Account</Text>
      <Text style={styles.subtitle}>
        Access your account to connect with{'\n'}industries and resources.
      </Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={18} color="#8E8E8E" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#8E8E8E"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={18} color="#8E8E8E" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#8E8E8E"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <Text style={styles.signUpText}>
        Need to create an account?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D1D1D',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#6E6E6E',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: '#333',
  },
  forgotPassword: {
    color: '#2E7D32',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 14,
    color: '#6E6E6E',
  },
  signUpLink: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
});

export default LoginScreen2;

// screens/LoginScreen.js
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const image = require('../assets/logo.png');

const LoginScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#41dfbf', '#f4e9e9']} style={styles.container}>
      <View>
        <Image source={image} style={styles.logo} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput placeholder="Correo" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry />
        <Button title="Ingresar" onPress={() => navigation.navigate('Home')} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginContainer: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    marginBottom: 200,
    marginTop: 0,
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  logo: {
    width: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default LoginScreen;

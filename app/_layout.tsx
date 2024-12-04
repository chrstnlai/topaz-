import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import Logo from '../assets/images/topazlogo.png'; 

const LoginScreen = () => {
  const [phoneOrUsername, setPhoneOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Logging in with:', { phoneOrUsername, password, rememberMe });
    setPhoneOrUsername('');
    setPassword('');
  };

  
  return (
    <View style={styles.outerContainer}>
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
  <Text style={styles.title}>Sign in to </Text>
  <Image 
    source={Logo}  
    style={{ 
      width: 80, 
      aspectRatio: 1, 
      bottom: 10,
      resizeMode: 'contain' 
    }} 
  />
  <Text style={styles.title}> get started.</Text>
</View>
    
      <TextInput
        style={styles.input}
        placeholder="Phone number or username"
        placeholderTextColor = "#999"
        value={phoneOrUsername}
        onChangeText={setPhoneOrUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
         placeholderTextColor = "#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.rememberMe}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            rememberMe ? styles.checkedCheckbox : null,
          ]}
          onPress={() => setRememberMe(!rememberMe)}
        />
        <Text style={styles.rememberMeText}>Remember me</Text>
      </View>
      </View>
      <View style = {styles.logincontainer}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.signUp}>Don't have an account? Sign up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  outerContainer: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 50, 
  },
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    borderColor:"#fff",
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 16,
    
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: '#6c63ff',
  },
  rememberMeText: {
    color: '#fff',
  },
  loginButton: {
    width: '30%',
    height: 50,
    backgroundColor: '#7679EC',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUp: {
    color: '#fff',
  },
  logincontainer:{
    alignItems:"center",
    justifyContent: 'center'
  }
});

export default LoginScreen;
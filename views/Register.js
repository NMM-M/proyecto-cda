import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

import {Button} from 'react-native-elements';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Registrarse</Text>
        </View>
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            autoCompleteType="name"
            autoCapitalize={'words'}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            autoCompleteType={'email'}
            keyboardType={'email-address'}
          />
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            autoCompleteType={'password'}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Button
            containerStyle={styles.button}
            title={'Registrar'}
            titleStyle={styles.textButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16303f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#fff',
    padding: 10,
  },
  title: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
    color: '#fff',
  },
  label: {
    fontSize: 18,
    color: '#fff',
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#2e6383',
    color: '#fff',
    fontSize: 18,
    borderRadius: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  button: {
    marginVertical: 10,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default Register;

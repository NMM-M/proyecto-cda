import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import {Button} from 'react-native-elements';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ScrollView>

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
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16303f',
  },
  form: {
    padding: 10,
    width: '90%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#fff',
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
    color: '#fff',
    fontSize: 18,
    borderRadius: 3,
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderBottomColor: '#fff',
    backgroundColor: '#2e6383',
  },
  button: {
    borderRadius: 5,
    marginVertical: 10,
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default Register;

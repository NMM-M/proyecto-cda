import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';

const Login = () => {
  //#region REACT NAVIGATION
  const navigation = useNavigation();
  //#endregion

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ScrollView>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Iniciar Sesion</Text>
        </View>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            autoCompleteType={'email'}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <Button
          title={'Ingresar'}
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          onPress={() => navigation.navigate('Asignaturas')}
        />
        <View style={styles.links}>
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Register')}>
            Registrarse
          </Text>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
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
  link: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  input: {
    fontSize: 18,
    color: '#fff',
    borderRadius: 3,
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#2e6383',
    borderBottomColor: '#fff',
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
  links: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;

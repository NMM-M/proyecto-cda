import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {

    //#region REACT NAVIGATION
    const navigation = useNavigation();
    //#endregion


    return ( 
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Iniciar Sesion</Text>
                </View>
                <View>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput style={styles.input} autoCompleteType='email'></TextInput>
                    <Text style={styles.label}>Contraseña:</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.button} >
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate("Asignaturas")}
                    >
                        <Text style={styles.textButton} autoCompleteType='password'>Ingresar</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.links}>
                    <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
                    <Text style={styles.link} onPress={() => navigation.navigate("Register")}>Registrarse</Text>
                </View>
            </View>
        </View>
    );
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#16303f',
        alignItems:'center',
        justifyContent:'center'
    },
    form:{
        width:'90%',
        borderRadius:5,
        borderWidth:.5,
        borderColor:'#fff',
        padding:10
    },
    title:{
        alignItems:'center',
    },
    textTitle:{        
        fontSize:24,
        color:'#fff'
    },
    label:{
        fontSize:18,
        color:'#fff',  
    },
    link:{
        color:'#fff',
        borderBottomColor:'#fff',
        borderBottomWidth:1,
    },
    input:{
        paddingHorizontal:10,
        marginVertical:10,
        backgroundColor:'#2e6383',
        color:'#fff',
        fontSize:18,
        borderRadius:3,
        borderBottomWidth:1,
        borderBottomColor:'#fff'
    },
    button:{
        marginVertical:10,
        padding:10,
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#8d8d8d',
        borderRadius:5,
    },
    textButton:{
        fontSize:20,
        color:'#fff',
        textTransform:'uppercase'
    },
    links:{
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center'
    },
});
 
export default Login;
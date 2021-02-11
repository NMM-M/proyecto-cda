import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';

const CardActivity = () => {
    return (  
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    resizeMode={'cover'}
                    style={styles.img}
                    source={require('../assets/images/actuar.jpg')}
                />
                <View style={styles.titulo}>
                    <Text style={styles.textTitle}>Juego de actuacion</Text>
                </View>
            </View>
            <View>
                <Text style={{fontSize:17}}>Descripcion:</Text>
                <Text style={{fontSize:15}}>Crea un video de un  minuto, donde tu y tus amigos representen el siguiente concepto:</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image
                    style={{width:300, height:200, marginTop:10}}
                    source={require('../assets/images/celula.jpg')}
                />
            </View>
            <View>
                <Text style={{fontSize:17}}>
                    Intrucciones:
                </Text>
                <Text style={{fontSize:15}}>
                    Grabe un video, suba a Youtube y copie el link en el cuadro a continuacion.
                </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <TextInput 
                    style={styles.input}
                    placeholder='Copia tu link Aqui!!'
                ></TextInput>

                <TouchableHighlight
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#eee',
        height:'100%',
        flex:1,
        padding:10,
        backgroundColor:'#fff'
    },
    header:{
        width:'100%'
    },
    img:{
        width:'100%',
        height:130,
    },
    titulo:{
        backgroundColor:'rgba(0,0,0,0.3)',
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0,
        height:130,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textTitle:{
        
        color:'#fff',
        fontSize:24,
    },
    text:{
        fontSize:15,
    },
    input:{
        flex:2,
        borderBottomWidth:1,
        borderBottomColor:'black',
        padding:10
    },
    button:{
        flex:1,
        backgroundColor:'#002b3c',
        marginLeft:5,
        alignItems:'center',
        justifyContent:'center'
    },
    textButton:{
        color:'#fff',
        fontSize:20
    }

});
export default CardActivity;


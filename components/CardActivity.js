import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';
import SubmitButton from './CardActivity/SubmitButton';
import CardHeader  from './CardActivity/CardHeader';

const CardActivity = () => {

    const [target, setTarget] = useState([]);


    return (  
        <View style={styles.container}>
            <CardHeader/>
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
                <Text style={styles.infoTitle}>
                    Intrucciones:
                </Text>
                <Text style={styles.infoDescription}>
                    Grabe un video, suba a Youtube y copie el link en el cuadro a continuacion.
                </Text>
            </View>
            <View>
                <SubmitButton/>
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
    },
    infoTitle:{
        fontSize:17,
    },
    infoDescription:{
        fontSize:15,
    }

});
export default CardActivity;

